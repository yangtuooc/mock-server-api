package cn.haloop.mock.service

import cn.haloop.mock.domain.Application
import cn.haloop.mock.domain.application
import cn.haloop.mock.domain.dto.ApiTag
import cn.haloop.mock.domain.dto.ApplicationEdit
import cn.haloop.mock.domain.dto.OpenApiSettingEdit
import cn.haloop.mock.domain.dto.SchemaModel
import cn.haloop.mock.domain.event.OpenApiSettingCreated
import cn.haloop.mock.domain.openApiSetting
import cn.haloop.mock.domain.projection.ApplicationEnvironmentView
import cn.haloop.mock.domain.projection.ApplicationView
import cn.haloop.mock.domain.projection.SchemaView
import cn.haloop.mock.repository.ApplicationEnvironmentRepository
import cn.haloop.mock.repository.ApplicationRepository
import cn.haloop.mock.repository.OpenApiSettingRepository
import cn.haloop.mock.repository.SchemaRepository
import jakarta.transaction.Transactional
import org.springframework.context.ApplicationEventPublisher
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
    val conversionService: ConversionService,
    val eventPublisher: ApplicationEventPublisher,
    val openApiService: OpenApiService,
    val openApiSettingService: OpenApiSettingService
) {


    fun create(req: ApplicationEdit) {
        val app = application {
            name = req.name
            endpoint = req.endpoint
            description = req.description
        }
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
        app.apiSetting = openApiSetting(app, openApi)
        appRepository.save(app)
        eventPublisher.publishEvent(OpenApiSettingCreated(app.id))
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

    fun findApplicationApiList(app: Application): List<ApiTag>? {
        return openApiService.findOpenApiTags(app)
    }

    fun syncApiDoc(app: Application) {
        openApiService.loadOpenApiDocument(app.id)
    }

    fun getSchemaModel(app: Application, hash: String): SchemaModel {
        return openApiService.getSchemaModel(app, hash)
    }
}