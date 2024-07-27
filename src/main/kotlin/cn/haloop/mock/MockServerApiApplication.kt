package cn.haloop.mock

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaAuditing

@EnableJpaAuditing
@SpringBootApplication
class MockServerApiApplication

fun main(args: Array<String>) {
    runApplication<MockServerApiApplication>(*args)
}
