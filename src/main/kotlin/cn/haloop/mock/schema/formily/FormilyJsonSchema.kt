package cn.haloop.mock.schema.formily

import io.swagger.v3.oas.models.media.Schema

/**
 * FormilyJsonSchema 是阿里的 Formily 表单生成器的 JSON Api 格式
 *
 * 基于 OpenAPI 3.0 的 Api，并在此基础上进行了扩展，支持 Formily中的一些特性
 * @author yangtuo
 */
class FormilyJsonSchema(schema: Schema<*>) : Schema<Any>() {

    init {
        this.type = schema.type
        this.format = schema.format
        this.title = schema.title
        this.description = schema.description
        this.default = schema.default
        this.example = schema.example
        this.enum = schema.enum
        this.`$ref` = schema.`$ref`
        this.items = schema.items
        this.properties = schema.properties
        this.additionalProperties = schema.additionalProperties
        this.required = schema.required
        this.allOf = schema.allOf
        this.oneOf = schema.oneOf
        this.anyOf = schema.anyOf
        this.not = schema.not
        this.nullable = schema.nullable
        this.readOnly = schema.readOnly
        this.writeOnly = schema.writeOnly
        this.deprecated = schema.deprecated
        this.xml = schema.xml
        this.externalDocs = schema.externalDocs
        this.example = schema.example
        this.extensions = schema.extensions

        this.decorate()
    }

    private fun decorate() {
        this.properties?.forEach { (key, value) ->
            if (value is Schema<*>) {
                this.properties[key] = FormilyJsonSchema(value)
            }
        }
        when (this.type) {
            "string" -> {
                this.addExtension("x-component", "Input")
                this.addExtension("x-decorator", "FormItem")
            }

            "number" -> {
                this.addExtension("x-component", "NumberPicker")
                this.addExtension("x-decorator", "FormItem")
            }

            "integer" -> {
                this.addExtension("x-component", "NumberPicker")
                this.addExtension("x-decorator", "FormItem")
            }

            "boolean" -> {
                this.addExtension("x-component", "Switch")
                this.addExtension("x-decorator", "FormItem")
            }

            "array" -> {
                this.addExtension("x-component", "ArrayTable")
                this.addExtension("x-decorator", "FormItem")
            }
        }
    }


}
