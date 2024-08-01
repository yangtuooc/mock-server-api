package cn.haloop.mock.domain.dto

import cn.haloop.mock.domain.HttpMethod
import cn.haloop.mock.domain.document.ApiPathRoute
import io.swagger.v3.oas.annotations.media.Schema

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

    constructor()

    constructor(key: String, value: List<ApiPathRoute>) {
        this.name = key
        this.description = value.first().tagDescription
        this.apiList = value.map {
            val api = Api()
            api.hash = it.id
            api.name = it.name
            api.description = it.description
            api.path = it.path
            api.method = it.method
            api
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


