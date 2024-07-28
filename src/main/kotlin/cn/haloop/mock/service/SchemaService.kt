package cn.haloop.mock.service

import cn.haloop.mock.repository.SchemaRepository
import org.springframework.stereotype.Service

/**
 * @author yangtuo
 */
@Service
class SchemaService(
    val repo: SchemaRepository,
    val openApiService: OpenApiService
) {

}