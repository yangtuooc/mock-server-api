package cn.haloop.mock.service

import cn.haloop.mock.domain.Application
import cn.haloop.mock.domain.dto.ApplicationEdit
import cn.haloop.mock.domain.dto.OpenApiSettingEdit
import cn.haloop.mock.domain.openApiSetting
import cn.haloop.mock.domain.projection.ApplicationEnvironmentView
import cn.haloop.mock.domain.projection.ApplicationView
import cn.haloop.mock.domain.projection.SchemaView
import cn.haloop.mock.repository.ApplicationEnvironmentRepository
import cn.haloop.mock.repository.ApplicationRepository
import cn.haloop.mock.repository.OpenApiSettingRepository
import cn.haloop.mock.repository.SchemaRepository
import jakarta.transaction.Transactional
import org.springframework.core.convert.ConversionService
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service

/**
 * @author yangtuo
 */
@Service
class ApplicationService(
    val appRepository: ApplicationRepository,
    val schemaRepository: SchemaRepository,
    val openApiRepository: OpenApiSettingRepository,
    val appEnvRepository: ApplicationEnvironmentRepository,
    val conversionService: ConversionService
) {


    fun create(req: ApplicationEdit) {
        val app = Application()
        app.name = req.name
        app.endpoint = req.endpoint
        app.description = req.description
        appRepository.save(app)
    }

    fun findApplications(pageable: Pageable): Page<ApplicationView> {
        return appRepository.findAllBy(pageable)
    }

    @Transactional(rollbackOn = [Exception::class])
    fun switchStatus(app: Application) {
        app.switchStatus()
    }

    fun getApplication(id: String): ApplicationView {
        return appRepository.getApplicationById(id)
    }

    fun findApplicationSchemas(id: String, pageable: Pageable): Page<SchemaView> {
        return schemaRepository.findSchemasByAppId(id, pageable)
    }

    @Transactional(rollbackOn = [Exception::class])
    fun setOpenApi(app: Application, openApi: OpenApiSettingEdit) {
        app.openApi = openApiSetting(app, openApi)
        appRepository.save(app)
    }

    fun findOpenApiSetting(id: String): OpenApiSettingEdit? {
        openApiRepository.findByAppId(id)?.let {
            return conversionService.convert(it, OpenApiSettingEdit::class.java)
        }
        return null
    }

    fun findApplicationEnvironments(app: Application): List<ApplicationEnvironmentView> {
        return appEnvRepository.findByApplicationIs(app)
    }
}