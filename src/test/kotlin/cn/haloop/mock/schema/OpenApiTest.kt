package cn.haloop.mock.schema

import io.swagger.v3.core.util.Json31
import io.swagger.v3.parser.OpenAPIV3Parser
import io.swagger.v3.parser.core.models.ParseOptions
import org.junit.jupiter.api.Test

/**
 * @author yangtuo
 */
class OpenApiTest {

    @Test
    fun resolve() {

        val options = ParseOptions()
        options.isResolve = true
        options.isResolveFully = true // resolve schema references


        val parsed = OpenAPIV3Parser().read("openapi.json", null, options)
        Json31.converterMapper().writerWithDefaultPrettyPrinter().writeValue(System.out, parsed)
    }

    @Test
    fun group() {
        val options = ParseOptions()
        options.isResolve = true
        options.isResolveFully = true // resolve schema references

        val parsed = OpenAPIV3Parser().read("openapi.json", null, options)
        parsed.paths.forEach { (path, pathItem) ->
            println("path: $path, pathItem: $pathItem")
        }
    }

}