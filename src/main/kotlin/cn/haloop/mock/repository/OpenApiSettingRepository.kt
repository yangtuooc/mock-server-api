package cn.haloop.mock.repository

import cn.haloop.mock.domain.OpenApiSetting
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

/**
 * @author yangtuo
 */
@Repository
interface OpenApiSettingRepository : JpaRepository<OpenApiSetting, String> {

    fun findByAppId(appId: String): OpenApiSetting?
}