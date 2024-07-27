package cn.haloop.mock.controller

import cn.haloop.mock.domain.Application
import cn.haloop.mock.domain.dto.ApplicationCreate
import cn.haloop.mock.domain.projection.ApplicationView
import cn.haloop.mock.domain.projection.SchemaView
import cn.haloop.mock.service.ApplicationService
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.tags.Tag
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.UUID

/**
 * @author yangtuo
 */
@Tag(
    name = "Application",
    description = "应用管理"
)
@RestController
@RequestMapping("/applications")
class ApplicationController(val svc: ApplicationService) {

    @Operation(
        operationId = "create",
        summary = "创建应用",
        description = "创建一个新的应用"
    )
    @PostMapping
    fun create(@RequestBody app: ApplicationCreate): ResponseEntity<Void> {
        svc.create(app)
        return ResponseEntity.status(HttpStatus.CREATED).build()
    }

    @Operation(
        operationId = "findApplications",
        summary = "查询应用",
        description = "查询应用列表"
    )
    @GetMapping
    fun findApplications(pageable: Pageable): ResponseEntity<Page<ApplicationView>> {
        return ResponseEntity.ok(svc.findApplications(pageable))
    }

    @Operation(
        operationId = "switchStatus",
        summary = "切换应用状态",
        description = "切换应用状态: 启用/禁用"
    )
    @PostMapping("/{id}/switch-status")
    fun switchStatus(@PathVariable("id") app: Application): ResponseEntity<Void> {
        svc.switchStatus(app)
        return ResponseEntity.ok().build()
    }

    @Operation(
        operationId = "getApplication",
        summary = "获取应用",
        description = "获取应用详情"
    )
    @GetMapping("/{id}")
    fun getApplication(@PathVariable("id") id: UUID): ResponseEntity<ApplicationView> {
        return ResponseEntity.ok(svc.getApplication(id))
    }

    @Operation(
        operationId = "findApplicationSchemas",
        summary = "查询应用Schema",
        description = "查询应用Schema列表"
    )
    @GetMapping("/{id}/schemas")
    fun findApplicationSchemas(
        @PathVariable("id") id: UUID,
        pageable: Pageable
    ): ResponseEntity<Page<SchemaView>> {
        return ResponseEntity.ok(svc.findApplicationSchemas(id, pageable))
    }
}