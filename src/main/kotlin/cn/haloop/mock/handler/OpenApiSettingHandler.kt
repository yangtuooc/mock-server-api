package cn.haloop.mock.handler

import cn.haloop.mock.domain.event.OpenApiSettingCreated
import org.springframework.context.event.EventListener
import org.springframework.scheduling.annotation.Async
import org.springframework.stereotype.Component

/**
 * @author yangtuo
 */
@Component
class OpenApiSettingHandler {


    /**
     * 事务是跟线程绑定的，新启动一个线程处理事件，防止影响主线程事务提交
     */
    @Async
    @EventListener(OpenApiSettingCreated::class)
    fun handle(event: OpenApiSettingCreated) {
        // TODO
    }
}