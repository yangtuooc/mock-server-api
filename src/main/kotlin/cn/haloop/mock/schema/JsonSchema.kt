package cn.haloop.mock.schema

/**
 *  reference: https://json-this.org/specification-links#2020-12
 *
 *  参考标准的Json Schema声明
 * @author yangtuo
 */
interface JsonSchema {

    val entry: MutableMap<String, Any>

    fun type(type: String): JsonSchema {
        entry["type"] = type
        return this
    }

    fun properties(properties: Map<String, JsonSchema>): JsonSchema {
        entry["properties"] = properties
        return this
    }

    fun additionalProperties(additionalProperties: Boolean): JsonSchema {
        entry["additionalProperties"] = additionalProperties
        return this
    }

    fun title(title: String): JsonSchema {
        entry["title"] = title
        return this
    }

    fun description(description: String): JsonSchema {
        entry["description"] = description
        return this
    }

    fun required(required: List<String>): JsonSchema {
        entry["required"] = required
        return this
    }

}

class SimpleJsonSchema : JsonSchema {

    override val entry: MutableMap<String, Any> = mutableMapOf()

}

fun jsonSchema(init: SimpleJsonSchema.() -> Unit): JsonSchema {
    val schema = SimpleJsonSchema()
    schema.init()
    return schema
}