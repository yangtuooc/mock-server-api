package cn.haloop.mock.repository.converter

import jakarta.persistence.AttributeConverter
import jakarta.persistence.Converter

/**
 * @author yangtuo
 */
@Converter
class StringArrayConverter : AttributeConverter<Array<String>, String> {

    override fun convertToDatabaseColumn(attribute: Array<String>?): String {
        if (attribute == null) {
            return ""
        }
        return attribute.joinToString(",")
    }

    override fun convertToEntityAttribute(dbData: String?): Array<String> {
        if (dbData == null) {
            return emptyArray()
        }
        return dbData.split(",").toTypedArray()
    }
}