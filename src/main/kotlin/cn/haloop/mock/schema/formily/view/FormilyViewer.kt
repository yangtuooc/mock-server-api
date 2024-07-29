package cn.haloop.mock.schema.formily.view

import cn.haloop.mock.schema.formily.FormilyJsonSchema
import com.fasterxml.jackson.annotation.JsonAnyGetter
import com.fasterxml.jackson.databind.JsonNode

/**
 * Formily视图，用于配置Formily组件页面样式
 * @author yangtuo
 */
interface FormilyViewer {

    val schema: FormilyJsonSchema

    /**
     * 渲染Formily视图，返回JsonNode
     */
    @JsonAnyGetter
    fun render(): JsonNode
}


