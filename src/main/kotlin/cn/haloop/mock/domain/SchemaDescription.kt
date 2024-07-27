package cn.haloop.mock.domain

import cn.haloop.mock.repository.converter.JsonNodeConverter
import cn.haloop.mock.repository.converter.StringArrayConverter
import com.fasterxml.jackson.databind.JsonNode
import jakarta.persistence.Column
import jakarta.persistence.Convert
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.Table
import org.springframework.http.HttpMethod
import java.util.UUID

/**
 * schema描述
 * @author yangtuo
 */
@Entity
@Table(name = "schema_description")
open class SchemaDescription : AbstractAuditable() {

    @Id
    open var id: UUID = UUID.randomUUID()

    /**
     * 关联的应用id
     */
    @ManyToOne
    @JoinColumn(name = "app_id", referencedColumnName = "id")
    open var app: Application? = null

    /**
     * schema名称
     */
    @Column(name = "name")
    open var name: String? = null

    /**
     * schema描述
     */
    @Column(name = "description")
    open var description: String? = null

    /**
     * schema 对应的接口路径
     */
    @Column(name = "path_segments")
    @Convert(converter = StringArrayConverter::class)
    open var pathSegments: Array<String>? = null

    /**
     * schema对应的接口请求方法
     */
    @Column(name = "http_method")
    open var httpMethod: HttpMethod? = null

    /**
     * 接口请求参数schema
     */
    @Column(name = "request_schema")
    @Convert(converter = JsonNodeConverter::class)
    open var requestSchema: JsonNode? = null

    /**
     * 接口响应参数schema
     */
    @Column(name = "response_schema")
    @Convert(converter = JsonNodeConverter::class)
    open var responseSchema: JsonNode? = null

    /**
     * 请求参数schema对应的ui schema
     */
    @Column(name = "request_ui_schema")
    @Convert(converter = JsonNodeConverter::class)
    open var requestUiSchema: JsonNode? = null

    /**
     * 响应参数schema对应的ui schema
     */
    @Column(name = "response_ui_schema")
    @Convert(converter = JsonNodeConverter::class)
    open var responseUiSchema: JsonNode? = null

    /**
     * 是否启用
     */
    @Column(name = "enabled")
    open var enabled: Boolean = true

}