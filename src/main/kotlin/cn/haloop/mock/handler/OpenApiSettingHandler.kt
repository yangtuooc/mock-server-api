package cn.haloop.mock.handler

import cn.haloop.mock.domain.document.OpenApiDocument
import cn.haloop.mock.domain.event.OpenApiSettingCreated
import cn.haloop.mock.repository.OpenApiDocumentRepository
import cn.haloop.mock.repository.OpenApiSettingRepository
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Component
import org.springframework.transaction.event.TransactionPhase
import org.springframework.transaction.event.TransactionalEventListener

/**
 * @author yangtuo
 */
@Component
class OpenApiSettingHandler(
    val openApiSettingRepository: OpenApiSettingRepository,
    val openApiDocumentRepository: OpenApiDocumentRepository
) {

    private val log = LoggerFactory.getLogger(OpenApiSettingHandler::class.java)


    @TransactionalEventListener(
        fallbackExecution = true,
        phase = TransactionPhase.AFTER_COMMIT,
        classes = [OpenApiSettingCreated::class]
    )
    fun handle(event: OpenApiSettingCreated) {
        val openApiSetting = openApiSettingRepository.findByAppId(event.appId)
        if (openApiSetting == null) {
            log.error("open api setting not found, appId: ${event.appId}")
            throw NoSuchElementException("open api setting not found, appId: ${event.appId}")
        }
        if (openApiSetting.isFileMode()) {
            log.error("file mode is not supported yet, appId: ${event.appId}")
            throw UnsupportedOperationException("file mode is not supported yet, appId: ${event.appId}")
        }
        val document = OpenApiDocument(event.appId, openApiSetting.url!!.readBytes())
        openApiDocumentRepository.save(document)
    }
}