package cn.haloop.mock.service

import cn.haloop.mock.domain.Application
import cn.haloop.mock.domain.document.OpenApiDocument
import cn.haloop.mock.domain.dto.ApiTag
import cn.haloop.mock.domain.dto.SchemaModel
import cn.haloop.mock.extensions.asApiPathRoutes
import cn.haloop.mock.extensions.getSchema
import cn.haloop.mock.repository.ApiPathRouteRepository
import cn.haloop.mock.repository.ApplicationRepository
import cn.haloop.mock.repository.OpenApiDocumentRepository
import cn.haloop.mock.schema.formily.FormilyJsonSchema
import io.swagger.v3.core.util.Json31
import io.swagger.v3.oas.models.OpenAPI
import io.swagger.v3.oas.models.Operation
import io.swagger.v3.parser.OpenAPIResolver
import io.swagger.v3.parser.OpenAPIV3Parser
import io.swagger.v3.parser.core.models.ParseOptions
import jakarta.transaction.Transactional
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Service
import java.net.URL

/**
 * @author yangtuo
 */
@Service
class OpenApiService(
    val openApiDocumentRepository: OpenApiDocumentRepository,
    val applicationRepository: ApplicationRepository,
    val apiPathRouteRepository: ApiPathRouteRepository,
) {

    private val log = LoggerFactory.getLogger(OpenApiService::class.java)

    private val mapper = Json31.converterMapper()

    fun parse(url: URL): OpenAPI {
        val options = ParseOptions().apply {
            isResolve = true
            isResolveFully = true
        }
        return OpenAPIV3Parser().read(url.toString(), null, options)
    }

    fun findOpenApiTags(app: Application): List<ApiTag> {
        val routes = apiPathRouteRepository.findByAppIdIs(app.id)
        if (routes.isEmpty()) {
            return emptyList()
        }
        return routes.groupBy { it.tagName }
            .map { ApiTag(it.key!!, it.value) }
    }

    private fun parse(oad: OpenApiDocument): OpenAPI {
        val api = mapper.readValue(oad.document!!.data, OpenAPI::class.java)
        val options = ParseOptions()
        options.isResolve = true
        options.isResolveFully = true
        return OpenAPIResolver(api, null, null, null, options).resolve()
    }


    fun getSchemaModel(hash: String): SchemaModel {
        val route = apiPathRouteRepository.findById(hash)
            .orElseThrow { throw IllegalArgumentException("path route not found, hash: $hash") }
        val operation = mapper.readValue(route.operation!!.data, Operation::class.java)
        val openApiSchema = operation.getSchema(route.method!!)
        return SchemaModel().apply {
            jsonSchema = mapper.valueToTree(FormilyJsonSchema(openApiSchema))
        }
    }

    @Transactional(rollbackOn = [Exception::class])
    fun loadOpenApiDocument(appId: String) {
        val app = applicationRepository.getReferenceById(appId)
        val openApiSetting = app.apiSetting ?: throw IllegalStateException("api setting not found, appId: $appId")
        if (openApiSetting.isFileMode()) {
            log.error("file mode is not supported yet, appId: $appId")
            throw UnsupportedOperationException("file mode is not supported yet, appId: $appId")
        }
        val openAPI = parse(openApiSetting.url!!)

        OpenApiDocument(appId, mapper.writeValueAsBytes(openAPI)).let {
            openApiDocumentRepository.save(it)
        }
        val apiPathRoutes = openAPI.asApiPathRoutes()
        apiPathRoutes.forEach {
            it.appId = app.id
        }
        apiPathRouteRepository.saveAll(apiPathRoutes)
    }
}