package cn.haloop.mock.controller

import cn.haloop.mock.domain.Application
import cn.haloop.mock.domain.dto.ApiTag
import cn.haloop.mock.domain.dto.ApplicationEdit
import cn.haloop.mock.domain.dto.OpenApiSettingEdit
import cn.haloop.mock.domain.dto.SchemaModel
import cn.haloop.mock.domain.projection.ApplicationEnvironmentView
import cn.haloop.mock.domain.projection.ApplicationView
import cn.haloop.mock.domain.projection.SchemaView
import cn.haloop.mock.service.ApplicationService
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.Parameter
import io.swagger.v3.oas.annotations.enums.ParameterIn
import io.swagger.v3.oas.annotations.tags.Tag
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

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
    fun create(@RequestBody app: ApplicationEdit): ResponseEntity<Void> {
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
    @Parameter(
        name = "id",
        description = "应用ID",
        required = true,
        `in` = ParameterIn.PATH,
        example = "123e4567-e89b-12d3-a456-426614174000"
    )
    @PostMapping("/{id}/switch-status")
    fun switchStatus(
        @Parameter(hidden = true) @PathVariable("id") app: Application
    ): ResponseEntity<Void> {
        svc.switchStatus(app)
        return ResponseEntity.ok().build()
    }


    @Operation(
        operationId = "getApplication",
        summary = "获取应用",
        description = "获取应用详情"
    )
    @GetMapping("/{id}")
    fun getApplication(@PathVariable("id") id: String): ResponseEntity<ApplicationView> {
        return ResponseEntity.ok(svc.getApplication(id))
    }


    @Operation(
        operationId = "findApplicationSchemas",
        summary = "查询应用Schema",
        description = "查询应用Schema列表"
    )
    @GetMapping("/{id}/schemas")
    fun findApplicationSchemas(
        @PathVariable("id") id: String,
        pageable: Pageable
    ): ResponseEntity<Page<SchemaView>> {
        return ResponseEntity.ok(svc.findApplicationSchemas(id, pageable))
    }


    @Operation(
        operationId = "setOpenApi",
        summary = "设置OpenAPI",
        description = "设置应用的OpenAPI配置信息"
    )
    @Parameter(
        name = "id",
        description = "应用ID",
        required = true,
        `in` = ParameterIn.PATH,
        example = "123e4567-e89b-12d3-a456-426614174000"
    )
    @PostMapping("/{id}/open-api")
    fun setOpenApi(
        @Parameter(hidden = true) @PathVariable("id") app: Application,
        @RequestBody openApi: OpenApiSettingEdit
    ): ResponseEntity<Void> {
        svc.setOpenApi(app, openApi)
        return ResponseEntity.status(HttpStatus.CREATED).build()
    }


    @Operation(
        operationId = "findOpenApiSetting",
        summary = "查询OpenAPI配置",
        description = "查询应用的OpenAPI配置信息"
    )
    @GetMapping("/{id}/open-api")
    fun findOpenApiSetting(@PathVariable("id") id: String): ResponseEntity<OpenApiSettingEdit> {
        return ResponseEntity.ok(svc.findOpenApiSetting(id))
    }

    @Operation(
        operationId = "findApplicationEnvironments",
        summary = "查询应用环境变量",
        description = "查询应用的环境变量列表"
    )
    @Parameter(
        name = "id",
        description = "应用ID",
        required = true,
        `in` = ParameterIn.PATH,
        example = "123e4567-e89b-12d3-a456-426614174000"
    )
    @GetMapping("/{id}/environments")
    fun findApplicationEnvironments(@Parameter(hidden = true) @PathVariable("id") app: Application): ResponseEntity<List<ApplicationEnvironmentView>> {
        return ResponseEntity.ok(svc.findApplicationEnvironments(app))
    }

    @Operation(
        operationId = "findApplicationApiList",
        summary = "查询应用API列表",
        description = "查询应用的API列表"
    )
    @Parameter(
        name = "id",
        description = "应用ID",
        required = true,
        `in` = ParameterIn.PATH,
        example = "123e4567-e89b-12d3-a456-426614174000"
    )
    @GetMapping("/{id}/api-list")
    fun findApplicationApiList(@Parameter(hidden = true) @PathVariable("id") app: Application): ResponseEntity<List<ApiTag>> {
        return ResponseEntity.ok(svc.findApplicationApiList(app))
    }

    @Operation(
        operationId = "syncApiDoc",
        summary = "同步API文档",
        description = "从远程获取最新的API文档，更新本地缓存"
    )
    @Parameter(
        name = "id",
        description = "应用ID",
        required = true,
        `in` = ParameterIn.PATH,
        example = "123e4567-e89b-12d3-a456-426614174000"
    )
    @PutMapping("/{id}/api-doc")
    fun syncApiDoc(@Parameter(hidden = true) @PathVariable("id") app: Application): ResponseEntity<Void> {
        svc.syncApiDoc(app)
        return ResponseEntity.ok().build()
    }

    @Operation(
        operationId = "getSchemaModel",
        summary = "获取SchemaModel",
        description = "获取指定接口的SchemaModel，包含表单schema和mock数据schema"
    )
    @GetMapping("/{id}/schema-model/{hash}")
    fun getSchemaModel(
        @PathVariable("id") app: Application,
        @PathVariable("hash") hash: String
    ): ResponseEntity<SchemaModel> {
        val model = svc.getSchemaModel(app, hash)
        return ResponseEntity.ok(model)
    }

}