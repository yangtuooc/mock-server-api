package cn.haloop.mock.controller

import cn.haloop.mock.domain.dto.SchemaModel
import cn.haloop.mock.service.OpenApiService
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.tags.Tag
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

/**
 * @author yangtuo
 */
@Tag(
    name = "PathRoute",
    description = "接口路径路由"
)
@RestController
@RequestMapping("/routes")
class PathRouteController(
    val openApiService: OpenApiService
) {

    @Operation(
        operationId = "getSchemaModel",
        summary = "获取SchemaModel",
        description = "获取当前请求接口的SchemaModel"
    )
    @GetMapping("/{id}")
    fun getSchemaModel(@PathVariable("id") id: String): ResponseEntity<SchemaModel> {
        return ResponseEntity.ok(openApiService.getSchemaModel(id))
    }
}