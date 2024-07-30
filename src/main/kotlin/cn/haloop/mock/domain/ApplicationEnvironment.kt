package cn.haloop.mock.domain

import jakarta.persistence.*
import java.util.*

/**
 * 应用环境变量
 * @author yangtuo
 */
@Entity
@Table(name = "application_environment")
class ApplicationEnvironment : AbstractAuditable() {

    @Id
    var id: String = UUID.randomUUID().toString()

    /**
     * 关联的应用
     */
    @ManyToOne
    @JoinColumn(name = "app_id", referencedColumnName = "id")
    var application: Application? = null


    /**
     * 环境变量key
     */
    @Column(name = "name")
    var name: String? = null

    /**
     * 环境变量值
     */
    @Column(name = "value")
    var value: String? = null

    /**
     * 环境变量描述
     */
    @Column(name = "desc")
    var desc: String? = null

    /**
     * enabled
     */
    @Column(name = "enabled")
    var enabled: Boolean = true

}