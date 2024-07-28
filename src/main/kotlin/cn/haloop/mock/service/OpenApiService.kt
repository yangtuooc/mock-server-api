package cn.haloop.mock.service

import com.fasterxml.jackson.databind.JsonNode
import io.swagger.v3.core.util.Json31
import io.swagger.v3.oas.models.OpenAPI
import org.springframework.stereotype.Service
import java.net.URL

/**
 * @author yangtuo
 */
@Service
class OpenApiService {

    private val mapper = Json31.converterMapper()

    fun parse(url: URL): OpenAPI {
        return mapper.readValue(url, OpenAPI::class.java)
    }

    fun getJsonSchema(openAPI: OpenAPI): JsonNode {
        return mapper.valueToTree(openAPI)
    }
}