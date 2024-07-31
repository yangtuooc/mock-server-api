package cn.haloop.mock.repository

import cn.haloop.mock.domain.document.OpenApiDocument
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

/**
 * @author yangtuo
 */
@Repository
interface OpenApiDocumentRepository : MongoRepository<OpenApiDocument, String>
