package cn.haloop.mock.mvc

import com.fasterxml.jackson.annotation.JsonInclude
import com.fasterxml.jackson.databind.ObjectMapper
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

/**
 * @author yangtuo
 */
@Configuration
class JacksonConfigurer {

    @Bean
    fun om(): ObjectMapper {
        val om = ObjectMapper()
        om.setSerializationInclusion(JsonInclude.Include.NON_NULL)
        om.setSerializationInclusion(JsonInclude.Include.NON_EMPTY)
        return om
    }
}

