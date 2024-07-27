package cn.haloop.mock.service

import cn.haloop.mock.domain.Application
import cn.haloop.mock.domain.dto.ApplicationCreate
import cn.haloop.mock.domain.projection.ApplicationView
import cn.haloop.mock.domain.projection.SchemaView
import cn.haloop.mock.repository.ApplicationRepository
import cn.haloop.mock.repository.SchemaRepository
import jakarta.transaction.Transactional
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service
import java.util.*

/**
 * @author yangtuo
 */
@Service
class ApplicationService(
    val appRepository: ApplicationRepository,
    val schemaRepository: SchemaRepository
) {


    fun create(req: ApplicationCreate) {
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

    fun getApplication(id: UUID): ApplicationView {
        return appRepository.getApplicationById(id)
    }

    fun findApplicationSchemas(id: UUID, pageable: Pageable): Page<SchemaView> {
        return schemaRepository.findSchemasByAppId(id, pageable)
    }
}