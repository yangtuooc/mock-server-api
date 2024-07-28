package cn.haloop.mock.schema.formily

import cn.haloop.mock.schema.ExtendableJsonSchema

/**
 * Formily 是 Alibaba 开源的一套基于 JSON Schema 的表单解决方案，通过 JSON Schema 来描述表单结构，通过 Formily 来渲染表单。
 * @author yangtuo
 */
open class FormilyJsonSchema : ExtendableJsonSchema() {

    private val componentProps = mutableMapOf<String, Any>()

    init {
        extend("x-component-props", componentProps)
    }

    fun `x-component`(component: String): FormilyJsonSchema {
        extend("x-component", component)
        return this
    }

    fun `x-decorator`(decorator: String): FormilyJsonSchema {
        extend("x-decorator", decorator)
        return this
    }

    fun `x-placeholder`(placeholder: String): FormilyJsonSchema {
        componentProps["placeholder"] = placeholder
        return this
    }

}

fun formilyJsonSchema(init: FormilyJsonSchema.() -> Unit): FormilyJsonSchema {
    val schema = FormilyJsonSchema()
    schema.init()
    return schema
}