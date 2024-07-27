package cn.haloop.mock.schema

import cn.haloop.mock.mvc.JacksonConfigurer
import cn.haloop.mock.schema.formily.FormilyJsonSchema
import org.junit.jupiter.api.Test
import kotlin.test.assertEquals

/**
 * @author yangtuo
 */
class JsonSchemaTest {

    private val om = JacksonConfigurer().om()

    @Test
    fun testGenerateSchema() {
        val jsonSchema = SimpleJsonSchema()
        jsonSchema.type("object")

        val clueId = SimpleJsonSchema()
        clueId.type("string")
        clueId.title("线索id")

        val realTimePush = SimpleJsonSchema()
        realTimePush.type("boolean")
        realTimePush.title("是否实时推送")

        jsonSchema.properties(
            mapOf(
                "clueId" to clueId,
                "realTimePush" to realTimePush
            )
        )

        val expected = """
            {"type":"object","properties":{"clueId":{"type":"string","title":"线索id"},"realTimePush":{"type":"boolean","title":"是否实时推送"}}}
        """.trimIndent()

        assertEquals(expected, om.writeValueAsString(jsonSchema))
    }


    @Test
    fun testGenerateFormilySchema() {

        val jsonSchema = SimpleJsonSchema()
        jsonSchema.type("object")

        val clueId = FormilyJsonSchema()
        clueId.type("string")
        clueId.title("线索id")
        clueId.`x-component`("Input")
        clueId.`x-decorator`("FormItem")
        clueId.`x-placeholder`("请输入线索id")

        val realTimePush = FormilyJsonSchema()
        realTimePush.type("boolean")
        realTimePush.title("是否实时推送")
        realTimePush.`x-component`("Switch")
        realTimePush.`x-decorator`("FormItem")

        jsonSchema.properties(
            mapOf(
                "clueId" to clueId,
                "realTimePush" to realTimePush
            )
        )

        val expected = """
            {"type":"object","properties":{"clueId":{"type":"string","title":"线索id","x-component-props":{"placeholder":"请输入线索id"},"x-component":"Input","x-decorator":"FormItem"},"realTimePush":{"type":"boolean","title":"是否实时推送","x-component":"Switch","x-decorator":"FormItem"}}}
        """.trimIndent()

        assertEquals(expected, om.writeValueAsString(jsonSchema))
//        println(om.writeValueAsString(jsonSchema))
    }

}