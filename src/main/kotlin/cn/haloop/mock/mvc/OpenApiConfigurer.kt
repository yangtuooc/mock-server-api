package cn.haloop.mock.mvc

import io.swagger.v3.oas.models.OpenAPI
import io.swagger.v3.oas.models.info.Info
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

/**
 * @author yangtuo
 */
@Configuration
class OpenApiConfigurer {

    @Bean
    fun openApi(): OpenAPI {
        return OpenAPI()
            .info(
                Info()
                    .title("Mock服务API")
                    .description("Mock服务API")
                    .version("0.0.1")
            )
    }
}