package cn.haloop.mock.domain.projection

import com.fasterxml.jackson.annotation.JsonIgnore
import io.swagger.v3.oas.annotations.media.Schema
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode.REQUIRED
import org.springframework.http.HttpMethod
import java.util.*

/**
 * Projection for {@link cn.haloop.mock.domain.SchemaDescription}
 */
@Schema
interface SchemaView {

    @get:Schema(description = "id", example = "123e4567-e89b-12d3-a456-426614174000", requiredMode = REQUIRED)
    val id: UUID

    @get:Schema(description = "schema 名称", example = "线索推送", requiredMode = REQUIRED)
    val name: String

    @get:Schema(description = "schema 描述", example = "线索推送")
    val description: String?

    @get:JsonIgnore
    val pathSegments: Array<String>

    @get:Schema(description = "schema 路径", example = "/api/v1/leads", requiredMode = REQUIRED)
    val path: String get() = pathSegments.joinToString("/")

    @get:Schema(description = "schema 请求方法", example = "POST", requiredMode = REQUIRED)
    val httpMethod: HttpMethod

    @get:Schema(description = "schema 是否启用", example = "true", requiredMode = REQUIRED)
    val enabled: Boolean

}
