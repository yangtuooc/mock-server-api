package cn.haloop.mock.domain.dto

import io.swagger.v3.oas.annotations.media.Schema
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode.REQUIRED
import jakarta.validation.constraints.NotBlank

/**
 * @author yangtuo
 */
@Schema(
    name = "ApplicationEdit",
    description = "创建应用"
)
class ApplicationEdit {

    @NotBlank(message = "应用名称不能为空")
    @Schema(name = "name", description = "应用名称", requiredMode = REQUIRED, example = "appName")
    var name: String? = null

    @NotBlank(message = "应用描述不能为空")
    @Schema(name = "description", description = "应用描述", requiredMode = REQUIRED, example = "appDescription")
    var endpoint: String? = null

    @Schema(name = "description", description = "应用描述", example = "appDescription")
    var description: String? = null

}