package cn.haloop.mock.mvc

import com.fasterxml.jackson.annotation.JsonInclude
import com.fasterxml.jackson.databind.ObjectMapper
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter

/**
 * @author yangtuo
 */
@Configuration
class JacksonConfigurer {


    fun enhance(origin: ObjectMapper): ObjectMapper {
        val om = origin.copy()
        om.setSerializationInclusion(JsonInclude.Include.NON_NULL)
        om.setSerializationInclusion(JsonInclude.Include.NON_EMPTY)
        return om
    }

    @Bean
    fun mappingJackson2HttpMessageConverter(std: ObjectMapper): MappingJackson2HttpMessageConverter {
        return MappingJackson2HttpMessageConverter(enhance(std))
    }
}

