package cn.haloop.mock.domain.projection

import io.swagger.v3.oas.annotations.media.Schema
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode.REQUIRED
import java.time.LocalDateTime
import java.util.UUID

/**
 * @author yangtuo
 */
@Schema
interface ApplicationView {

    @get:Schema(description = "应用ID", example = "123e4567-e89b-12d3-a456-426614174000", requiredMode = REQUIRED)
    val id: UUID

    @get:Schema(description = "应用名称", example = "mock", requiredMode = REQUIRED)
    val name: String

    @get:Schema(description = "应用端点", example = "https://mock.example.com", requiredMode = REQUIRED)
    val endpoint: String

    @get:Schema(description = "应用描述", example = "mock应用", requiredMode = REQUIRED)
    val description: String

    @get:Schema(description = "应用是否启用", example = "true", requiredMode = REQUIRED)
    val enabled: Boolean

    @get:Schema(description = "创建时间", example = "2021-08-01T00:00:00", requiredMode = REQUIRED)
    val createdAt: LocalDateTime
}