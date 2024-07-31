package cn.haloop.mock.domain.dto

import com.fasterxml.jackson.databind.JsonNode
import io.swagger.v3.oas.annotations.media.Schema

/**
 * @author yangtuo
 */
@Schema
class SchemaModel {

    @Schema(description = "表单schema，包含数据描述和样式")
    var jsonSchema: JsonNode? = null

    @Schema(description = "mock数据的schema，定义了mock数据的生成规则")
    var mockSchema: JsonNode? = null

}