package cn.haloop.mock.domain

import cn.haloop.mock.repository.converter.JsonNodeConverter
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
     * openAPI中的tag，用于分类
     */
    @Column(name = "tag")
    open var tag: String? = null

    /**
     * openAPI中的summary, 用于描述接口
     */
    @Column(name = "summary")
    open var summary: String? = null

    /**
     * schema描述
     */
    @Column(name = "description")
    open var description: String? = null

    /**
     * schema 对应的接口路径
     */
    @Column(name = "path")
    open var path: String? = null

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
     * 是否启用
     */
    @Column(name = "enabled")
    open var enabled: Boolean = true

}