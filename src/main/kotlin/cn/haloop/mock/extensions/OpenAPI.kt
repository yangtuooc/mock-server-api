package cn.haloop.mock.extensions

import cn.haloop.mock.domain.HttpMethod
import io.swagger.v3.oas.models.OpenAPI
import io.swagger.v3.oas.models.media.Schema
import java.security.MessageDigest

/**
 * @author yangtuo
 */
data class Api(
    var hash: String,
    var path: String?,
    var method: HttpMethod?,
    var schemas: List<Schema<*>?>
)


fun OpenAPI.findSchema(hash: String): Api {
    val api = Api(hash, null, null, emptyList())
    findOperation(api)
    return api
}

private fun OpenAPI.findOperation(api: Api) {
    paths.forEach { (path, item) ->
        if (item.get != null) {
            val hash = hash("$path-${HttpMethod.GET}")
            if (hash == api.hash) {
                api.path = path
                api.method = HttpMethod.GET
                api.schemas = item.get.parameters.map { it.schema }
            }
        }
    }
}


private fun hash(str: String): String {
    return MessageDigest.getInstance("SHA-1").digest(str.toByteArray()).joinToString("") { "%02x".format(it) }
}
