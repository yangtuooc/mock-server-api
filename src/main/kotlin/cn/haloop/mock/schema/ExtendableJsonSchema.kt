package cn.haloop.mock.schema

import com.fasterxml.jackson.annotation.JsonIgnore

/**
 * 可扩展的JsonSchema，基于JsonSchema的扩展，用于支持更多的属性，如：ui组件，mock数据等
 * e.g. x-component, x-mock 等
 * 同时不会破坏原有的JsonSchema的结构
 * @author yangtuo
 */
abstract class ExtendableJsonSchema : JsonSchema {

    val ext: MutableMap<String, Any> = mutableMapOf()

    override val entry: MutableMap<String, Any> = mutableMapOf()

    fun extend(key: String, value: Any): ExtendableJsonSchema {
        ext[key] = value
        return this
    }
}


