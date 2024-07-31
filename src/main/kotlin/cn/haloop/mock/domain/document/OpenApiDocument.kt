package cn.haloop.mock.domain.document

import jakarta.persistence.Id
import org.bson.types.Binary
import org.springframework.data.mongodb.core.mapping.Document
import java.util.*

/**
 * OpenApi文档的对象，用于存储OpenApi文档的信息
 * 一个OpenApiDocument对应一个接口文档
 *
 * @author yangtuo
 */
@Document("open_api_document")
class OpenApiDocument {

    @Id
    var id: String = UUID.randomUUID().toString()

    /**
     * 应用id
     */
    var appId: String? = null

    /**
     * 文档对象
     */
    var document: Binary? = null

    constructor()

    constructor(appId: String, document: ByteArray) {
        this.appId = appId
        this.document = Binary(document)
    }
}

