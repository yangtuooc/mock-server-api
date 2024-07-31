package cn.haloop.mock.controller

import cn.haloop.mock.domain.OpenApiSetting
import cn.haloop.mock.domain.dto.OpenApiSettingEdit
import cn.haloop.mock.service.OpenApiSettingService
import io.swagger.v3.oas.annotations.Parameter
import io.swagger.v3.oas.annotations.tags.Tag
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

/**
 * @author yangtuo
 */
@Tag(
    name = "OpenApiSetting",
    description = "OpenApi设置"
)
@RestController
@RequestMapping("/open-api-settings")
class OpenApiSettingController(
    val svc: OpenApiSettingService
) {

    @PutMapping("/{id}")
    fun update(
        @Parameter(hidden = true) @PathVariable("id") setting: OpenApiSetting,
        @RequestBody edit: OpenApiSettingEdit
    ): ResponseEntity<Void> {
        svc.update(setting, edit)
        return ResponseEntity.ok().build()
    }
}