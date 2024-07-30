package cn.haloop.mock.domain

import jakarta.persistence.*
import java.util.*

/**
 * @author yangtuo
 */
@Entity
@Table(name = "application")
open class Application : AbstractAuditable() {

    @Id
    open var id: String = UUID.randomUUID().toString()

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
     * OpenAPI 设置
     */
    @OneToOne(mappedBy = "app", cascade = [CascadeType.ALL])
    open var openApi: OpenApiSetting? = null

    /**
     * 环境变量
     */
    @OneToMany(mappedBy = "application", cascade = [CascadeType.ALL])
    open var environments: MutableList<ApplicationEnvironment> = mutableListOf()

    /**
     * 切换状态: 启用/禁用
     */
    fun switchStatus() {
        enabled = !enabled
    }

}