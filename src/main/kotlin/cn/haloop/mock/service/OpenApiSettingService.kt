package cn.haloop.mock.service

import cn.haloop.mock.domain.OpenApiSetting
import cn.haloop.mock.domain.dto.OpenApiSettingEdit
import jakarta.transaction.Transactional
import org.springframework.stereotype.Service

/**
 * @author yangtuo
 */
@Service
class OpenApiSettingService(
    val openApiService: OpenApiService
) {

    @Transactional
    fun update(setting: OpenApiSetting, edit: OpenApiSettingEdit) {
        setting.update(edit)
    }

    fun sync(setting: OpenApiSetting) {
        if (setting.isFileMode()) {
            throw UnsupportedOperationException("unsupported operation for file mode")
        }
        openApiService.sync(setting.app!!, setting.url!!)
    }

}