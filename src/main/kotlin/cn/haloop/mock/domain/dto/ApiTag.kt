package cn.haloop.mock.domain.dto

import cn.haloop.mock.domain.HttpMethod
import io.swagger.v3.oas.annotations.media.Schema
import io.swagger.v3.oas.models.OpenAPI
import io.swagger.v3.oas.models.Operation
import java.security.MessageDigest

/**
 * api接口文档
 * @author yangtuo
 */
@Schema
class ApiTag {

    @Schema(description = "对应openapi的tag，通常是一个controller")
    var name: String? = null

    @Schema(description = "tag的描述")
    var description: String? = null

    var apiList: List<Api>? = null

    companion object {
        fun from(openAPI: OpenAPI): List<ApiTag> {
            return openAPI.tags.map { tag ->
                ApiTag().apply {
                    name = tag.name
                    description = tag.description
                    apiList = openAPI.paths.flatMap { (path, pathItem) ->
                        listOfNotNull(
                            createApi(path, pathItem.get, HttpMethod.GET, tag.name),
                            createApi(path, pathItem.post, HttpMethod.POST, tag.name),
                            createApi(path, pathItem.put, HttpMethod.PUT, tag.name),
                            createApi(path, pathItem.delete, HttpMethod.DELETE, tag.name)
                        )
                    }
                }
            }
        }

        private fun createApi(path: String, operation: Operation?, method: HttpMethod, tagName: String): Api? {
            return operation?.takeIf { it.tags?.contains(tagName) == true }?.let {
                Api().apply {
                    this.hash = hash("$path-$method")
                    this.path = path
                    this.name = it.summary
                    this.method = method
                    this.description = it.description
                }
            }
        }

        private fun hash(str: String): String {
            return MessageDigest.getInstance("SHA-1").digest(str.toByteArray()).joinToString("") { "%02x".format(it) }
        }
    }
}

@Schema
class Api {

    @Schema(description = "接口hash，根据接口的路径和方法生成，用于标识接口的唯一性", required = true)
    var hash: String? = null

    @Schema(description = "接口名称", required = true)
    var name: String? = null

    @Schema(description = "接口描述")
    var description: String? = null

    @Schema(description = "接口路径", required = true)
    var path: String? = null

    @Schema(description = "请求方法", required = true)
    var method: HttpMethod? = null

}


