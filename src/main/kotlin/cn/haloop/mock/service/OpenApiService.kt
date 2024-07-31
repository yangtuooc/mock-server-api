package cn.haloop.mock.service

import cn.haloop.mock.domain.Application
import cn.haloop.mock.domain.document.OpenApiDocument
import cn.haloop.mock.domain.dto.ApiTag
import cn.haloop.mock.repository.OpenApiDocumentRepository
import com.fasterxml.jackson.databind.JsonNode
import io.swagger.v3.core.util.Json31
import io.swagger.v3.oas.models.OpenAPI
import org.springframework.core.convert.ConversionService
import org.springframework.stereotype.Service
import java.net.URL

/**
 * @author yangtuo
 */
@Service
class OpenApiService(
    val openApiDocumentRepository: OpenApiDocumentRepository,
    val conversionService: ConversionService
) {

    private val mapper = Json31.converterMapper()

    fun parse(url: URL): OpenAPI {
        return mapper.readValue(url, OpenAPI::class.java)
    }

    fun getJsonSchema(openAPI: OpenAPI): JsonNode {
        return mapper.valueToTree(openAPI)
    }

    fun findOpenApiTags(app: Application): List<ApiTag> {
        val apiDocument = openApiDocumentRepository.findByAppIdIs(app.id) ?: return emptyList()
        val openAPI = parse(apiDocument)
        return ApiTag.from(openAPI)
    }

    private fun parse(oad: OpenApiDocument): OpenAPI {
        return mapper.readValue(oad.document!!.data, OpenAPI::class.java)
    }
}