package cn.haloop.mock.domain

import jakarta.persistence.*
import java.util.*

/**
 * @author yangtuo
 */
@Entity
@Table(name = "applications")
open class Application : AbstractAuditable() {

    @Id
    open var id: UUID = UUID.randomUUID()

    /**
     * 应用名称
     */
    @Column(name = "name")
    open var name: String? = null

    /**
     * 服务地址
     */
    @Column(name = "endpoint")
    open var endpoint: String? = null

    /**
     * 应用描述
     */
    @Column(name = "description")
    open var description: String? = null

    /**
     * 是否启用
     */
    @Column(name = "enabled")
    open var enabled: Boolean = true

    /**
     * 关联的schema 描述信息
     */
    @OneToMany(mappedBy = "app")
    open var schemaDescriptions: MutableList<SchemaDescription> = ArrayList()

    fun switchStatus() {
        enabled = !enabled
    }
}