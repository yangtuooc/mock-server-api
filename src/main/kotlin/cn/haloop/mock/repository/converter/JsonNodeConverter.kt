package cn.haloop.mock.repository.converter

import cn.haloop.mock.mvc.JacksonConfigurer
import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.databind.ObjectMapper
import jakarta.persistence.AttributeConverter
import jakarta.persistence.Convert
import jakarta.persistence.Converter

/**
 * @author yangtuo
 */
@Converter
class JsonNodeConverter : AttributeConverter<JsonNode, String> {

    private val om = ObjectMapper()

    override fun convertToDatabaseColumn(attribute: JsonNode?): String {
        return om.writeValueAsString(attribute)
    }

    override fun convertToEntityAttribute(dbData: String?): JsonNode {
        return om.readTree(dbData)
    }
}