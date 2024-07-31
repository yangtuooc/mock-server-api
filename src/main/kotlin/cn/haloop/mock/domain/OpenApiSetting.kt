package cn.haloop.mock.domain

import cn.haloop.mock.domain.dto.OpenApiSettingEdit
import cn.haloop.mock.repository.converter.JsonNodeConverter
import com.fasterxml.jackson.databind.JsonNode
import jakarta.persistence.*
import java.net.URL
import java.util.*

/**
 * @author yangtuo
 */
@Entity
@Table(name = "openapi_setting")
open class OpenApiSetting : AbstractAuditable() {

    @Id
    open var id: String = UUID.randomUUID().toString()

    /**
     * 应用id
     */
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "app_id", referencedColumnName = "id")
    open var app: Application? = null

    /**
     * 接口文档加载模式
     * @see LoadMode
     */
    @Column(name = "load_mode")
    @Enumerated(EnumType.STRING)
    open var loadMode: LoadMode = LoadMode.URL

    /**
     * 接口文档URL
     */
    @Column(name = "url")
    open var url: URL? = null

    /**
     * 接口文档文件，仅支持JSON格式
     */
    @Column(name = "file")
    @Convert(converter = JsonNodeConverter::class)
    open var file: JsonNode? = null

    /**
     * 缓存的接口文档
     *
     * 通过URL加载的接口文档会被缓存，以减少对远程服务器的请求
     *
     * 为什么不用file字段？
     * 1. file字段用于存储用户上传的接口文档，不适合存储缓存的接口文档
     * 2. 缓存的接口文档可能会被定时更新，而file字段的接口文档是用户上传的，不会被更新
     * 3. 当用户由FILE MODE切换为URL MODE时，无法确定file是存储的用户上传的接口文档还是缓存的接口文档
     */
    @Column(name = "cache")
    @Convert(converter = JsonNodeConverter::class)
    open var cache: JsonNode? = null

    /**
     * 自动更新：是否定时更新同步接口文档
     *
     * 适用于URL加载模式
     */
    @Column(name = "auto_update")
    open var autoUpdate: Boolean = false

    /**
     * cron表达式
     *
     * 适用于URL加载模式
     */
    @Column(name = "cron")
    open var cron: String? = null


    /**
     * 是否启用
     */
    @Column(name = "enabled")
    open var enabled: Boolean = true

    fun isFileMode(): Boolean {
        return loadMode == LoadMode.FILE
    }

    fun update(edit: OpenApiSettingEdit) {
        loadMode = edit.loadMode
        url = edit.url
        file = edit.file
        autoUpdate = edit.autoUpdate
        cron = edit.cron
    }
}

fun openApiSetting(init: OpenApiSetting.() -> Unit): OpenApiSetting {
    val openApiSetting = OpenApiSetting()
    openApiSetting.init()
    return openApiSetting
}

fun openApiSetting(application: Application, setting: OpenApiSettingEdit): OpenApiSetting {
    return openApiSetting {
        loadMode = setting.loadMode
        url = setting.url
        file = setting.file
        autoUpdate = setting.autoUpdate
        cron = setting.cron
        app = application
    }
}


enum class LoadMode {
    /**
     * 从文件加载
     */
    FILE,

    /**
     * 从URL加载
     */
    URL
}