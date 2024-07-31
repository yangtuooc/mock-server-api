package cn.haloop.mock.mango

import cn.haloop.mock.domain.document.OpenApiDocument
import cn.haloop.mock.repository.OpenApiDocumentRepository
import com.fasterxml.jackson.databind.ObjectMapper
import io.swagger.v3.oas.models.OpenAPI
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest
import java.io.InputStream
import kotlin.test.assertNotNull

/**
 * @author yangtuo
 */
@DataMongoTest(
    properties = [
        "spring.data.mongodb.host=localhost",
        "spring.data.mongodb.port=27017",
        "spring.data.mongodb.database=mock_schema",
        "spring.data.mongodb.username=root",
        "spring.data.mongodb.password=123456",
        "spring.data.mongodb.authentication-database=admin"
    ]
)
class MangoTest {

    private val om = ObjectMapper()

    @Autowired
    private lateinit var repository: OpenApiDocumentRepository

    @Test
    fun mangoTest() {
        val doc = OpenApiDocument("39ffb582-48b9-4b49-b616-822de59efdbd", openApiStream().readAllBytes())
        val id = doc.id
        repository.save(doc)

        val result = repository.findById(id)
        assert(result.isPresent)

        val find = result.get()
        val api = om.readValue(find.document?.data, OpenAPI::class.java)
        assertNotNull(api)
    }

    private fun openAPI(): OpenAPI {
        val inputStream = openApiStream()
        val oai = om.readValue(inputStream, OpenAPI::class.java)
        return oai
    }

    private fun openApiStream(): InputStream {
        return this.javaClass.classLoader.getResourceAsStream("openapi.json")!!
    }
}