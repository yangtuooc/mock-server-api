package cn.haloop.mock.domain.projection

import io.swagger.v3.oas.annotations.media.Schema

/**
 * Projection for {@link cn.haloop.mock.domain.ApplicationEnvironment}
 *
 * @author yangtuo
 */
@Schema
interface ApplicationEnvironmentView {

    @get:Schema(description = "变量ID", example = "1", required = true)
    val id: String

    @get:Schema(description = "变量名", example = "appKey", required = true)
    val name: String

    @get:Schema(description = "变量值", example = "123456", required = true)
    val value: String

    @get:Schema(description = "变量描述", example = "应用key", required = false)
    val desc: String
}