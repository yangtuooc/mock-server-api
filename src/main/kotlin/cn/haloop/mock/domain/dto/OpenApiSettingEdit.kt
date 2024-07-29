package cn.haloop.mock.domain.dto

import cn.haloop.mock.domain.LoadMode
import com.fasterxml.jackson.databind.JsonNode
import io.swagger.v3.oas.annotations.media.Schema
import java.net.URL

/**
 * DTO for {@link cn.haloop.mock.domain.OpenApiSetting}
 */
@Schema
class OpenApiSettingEdit {

    @Schema(title = "加载模式", description = "URL: 从URL加载, FILE: 从文件加载", required = true, example = "URL")
    var loadMode: LoadMode = LoadMode.URL

    @Schema(
        title = "URL",
        description = "URL加载模式下的URL",
        required = false,
        example = "http://localhost:8080/openapi.json"
    )
    var url: URL? = null

    @Schema(
        title = "文件",
        description = "文件加载模式下的文件",
        required = false
    )
    var file: JsonNode? = null

    @Schema(
        title = "自动更新",
        description = "是否自动更新",
        required = false,
        example = "false"
    )
    var autoUpdate: Boolean = false

    @Schema(
        title = "CRON表达式",
        description = "CRON表达式",
        required = false,
        example = "0 0 0 * * ?"
    )
    var cron: String? = null
}