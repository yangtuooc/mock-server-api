package cn.haloop.mock.handler

import cn.haloop.mock.domain.event.OpenApiSettingCreated
import cn.haloop.mock.service.OpenApiService
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Component
import org.springframework.transaction.event.TransactionPhase
import org.springframework.transaction.event.TransactionalEventListener

/**
 * @author yangtuo
 */
@Component
class OpenApiSettingHandler(
    val openApiService: OpenApiService
) {

    private val log = LoggerFactory.getLogger(OpenApiSettingHandler::class.java)


    @TransactionalEventListener(
        fallbackExecution = true,
        phase = TransactionPhase.AFTER_COMMIT,
        classes = [OpenApiSettingCreated::class]
    )
    fun handle(event: OpenApiSettingCreated) {
        openApiService.loadOpenApiDocument(event.appId)
    }
}