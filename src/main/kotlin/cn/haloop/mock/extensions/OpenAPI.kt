package cn.haloop.mock.extensions

import cn.haloop.mock.domain.HttpMethod
import cn.haloop.mock.domain.document.ApiPathRoute
import cn.haloop.mock.domain.document.apiPathRoute
import io.swagger.v3.core.util.Json31
import io.swagger.v3.oas.models.OpenAPI
import io.swagger.v3.oas.models.Operation
import io.swagger.v3.oas.models.PathItem
import io.swagger.v3.oas.models.media.Schema
import io.swagger.v3.oas.models.tags.Tag
import org.bson.types.Binary
import java.security.MessageDigest

/**
 * @author yangtuo
 */
fun OpenAPI.asApiPathRoutes(): List<ApiPathRoute> {
    return this.paths.entries.map { (p, pathItem) ->
        apiPathRoute {
            id = hash(p, pathItem.method())
            tagName = getTag(pathItem.operation(pathItem.method()).tags.first()).name
            tagDescription = getTag(pathItem.operation(pathItem.method()).tags.first()).description
            name = pathItem.operation(pathItem.method()).summary
            path = p
            method = pathItem.method()
            description = pathItem.operation(pathItem.method()).description
            operation = Binary(pathItem.operation(pathItem.method()).toBinary())
        }
    }
}

fun OpenAPI.getTag(tagName: String): Tag {
    return this.tags.find { it.name == tagName } ?: throw NoSuchElementException("tag not found")
}

private fun Operation.toBinary(): ByteArray {
    return Json31.mapper().writeValueAsBytes(this)
}

fun Operation.getSchema(method: HttpMethod): Schema<*> {
    return when (method) {
        HttpMethod.GET -> this.parameters.first().schema
        HttpMethod.POST -> this.requestBody.content.values.first().schema
        HttpMethod.PUT -> this.requestBody.content.values.first().schema
        HttpMethod.DELETE -> this.parameters.first().schema
    } ?: throw IllegalArgumentException("unknown method")
}

private fun PathItem.operation(method: HttpMethod): Operation {
    return when (method) {
        HttpMethod.GET -> this.get
        HttpMethod.POST -> this.post
        HttpMethod.PUT -> this.put
        HttpMethod.DELETE -> this.delete
    } ?: throw IllegalArgumentException("unknown method")
}


private fun PathItem.method(): HttpMethod {
    return when {
        this.get != null -> HttpMethod.GET
        this.post != null -> HttpMethod.POST
        this.put != null -> HttpMethod.PUT
        this.delete != null -> HttpMethod.DELETE
        else -> throw IllegalArgumentException("unknown method")
    }
}

private fun hash(path: String, method: HttpMethod): String {
    return MessageDigest.getInstance("SHA-1").digest("$path-${method.name}".toByteArray()).joinToString("") {
        "%02x".format(it)
    }
}
