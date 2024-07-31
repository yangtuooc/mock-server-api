package cn.haloop.mock

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.web.config.EnableSpringDataWebSupport
import org.springframework.data.web.config.EnableSpringDataWebSupport.PageSerializationMode.VIA_DTO

@SpringBootApplication
@EnableSpringDataWebSupport(pageSerializationMode = VIA_DTO)
class MockServerApiApplication

fun main(args: Array<String>) {
    runApplication<MockServerApiApplication>(*args)
}
