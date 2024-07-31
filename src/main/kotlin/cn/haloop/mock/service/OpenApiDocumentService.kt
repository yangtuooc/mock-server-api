package cn.haloop.mock.service

import cn.haloop.mock.repository.OpenApiDocumentRepository
import org.springframework.stereotype.Service

/**
 * @author yangtuo
 */
@Service
class OpenApiDocumentService(
    val openApiDocumentRepository: OpenApiDocumentRepository
) {


}