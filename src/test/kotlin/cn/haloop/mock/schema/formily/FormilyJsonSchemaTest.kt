package cn.haloop.mock.schema.formily

import com.fasterxml.jackson.databind.ObjectMapper
import io.swagger.v3.core.util.Json31
import io.swagger.v3.core.util.OpenAPISchema2JsonSchema
import io.swagger.v3.oas.models.OpenAPI
import org.junit.jupiter.api.Test

/**
 * @author yangtuo
 */
class FormilyJsonSchemaTest {

    private val om = ObjectMapper()


    @Test
    fun openApi() {
        val oai = openAPI()
        val schema = oai.components.schemas["Clue"]!!
        schema.properties["clueId"]!!.addExtension("x-component", "Input")
        OpenAPISchema2JsonSchema().process(schema)
        Json31.pretty().writeValue(System.out, schema)
    }

    @Test
    fun formilySchema() {
        val api = openAPI()
        val schema = api.components.schemas["Clue"]!!
        for (property in schema.properties) {
            property.setValue(FormilyJsonSchema(property.value))
        }

        OpenAPISchema2JsonSchema().process(schema)
        Json31.pretty().writeValue(System.out, schema)
    }

    private fun openAPI(): OpenAPI {
        val inputStream = this.javaClass.classLoader.getResourceAsStream("openapi.json")
        val oai = om.readValue(inputStream, OpenAPI::class.java)
        return oai
    }

}