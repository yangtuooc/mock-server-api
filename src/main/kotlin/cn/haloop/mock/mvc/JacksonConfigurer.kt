package cn.haloop.mock.mvc

import cn.haloop.mock.schema.ExtendableJsonSchema
import cn.haloop.mock.schema.JsonSchema
import cn.haloop.mock.schema.SimpleJsonSchema
import com.fasterxml.jackson.annotation.JsonInclude
import com.fasterxml.jackson.core.JsonGenerator
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.databind.SerializerProvider
import com.fasterxml.jackson.databind.module.SimpleModule
import com.fasterxml.jackson.databind.ser.std.StdSerializer
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

        val sm = SimpleModule()
        sm.addSerializer(ExtendableJsonSchema::class.java, ExtendableJsonSchemaSerializer())
        sm.addSerializer(SimpleJsonSchema::class.java, SimpleJsonSchemaSerializer())
        om.registerModule(sm)

        return om
    }
}

class SimpleJsonSchemaSerializer : StdSerializer<SimpleJsonSchema>(SimpleJsonSchema::class.java) {
    override fun serialize(schema: SimpleJsonSchema?, gen: JsonGenerator?, serializer: SerializerProvider?) {
        if (schema == null || gen == null) {
            return
        }
        gen.writeObject(schema.entry)
    }
}

class ExtendableJsonSchemaSerializer : StdSerializer<ExtendableJsonSchema>(ExtendableJsonSchema::class.java) {
    override fun serialize(schema: ExtendableJsonSchema?, gen: JsonGenerator?, serializer: SerializerProvider?) {
        if (schema == null || gen == null) {
            return
        }
        val ext = schema.ext
        val entry = schema.entry

        entry.putAll(ext)
        gen.writeObject(entry)
    }

}

