package cn.haloop.mock.domain.document

import cn.haloop.mock.domain.HttpMethod
import jakarta.persistence.Id
import org.bson.types.Binary
import org.springframework.data.mongodb.core.mapping.Document

/**
 * 存储了每一个路径的信息，方便后续的路由匹配
 * @author yangtuo
 */
@Document("path_route")
class ApiPathRoute {

    @Id
    var id: String? = null

    var appId: String? = null

    var tagName: String? = null

    var tagDescription: String? = null

    var name: String? = null

    var path: String? = null

    var method: HttpMethod? = null

    var description: String? = null

    /**
     * 二进制数据，存储了该路径的路由信息
     */
    var operation: Binary? = null

}

fun apiPathRoute(block: ApiPathRoute.() -> Unit): ApiPathRoute {
    val route = ApiPathRoute()
    route.block()
    return route
}