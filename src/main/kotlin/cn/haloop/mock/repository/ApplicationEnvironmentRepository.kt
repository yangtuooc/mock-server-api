package cn.haloop.mock.repository

import cn.haloop.mock.domain.Application
import cn.haloop.mock.domain.ApplicationEnvironment
import cn.haloop.mock.domain.projection.ApplicationEnvironmentView
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

/**
 * @author yangtuo
 */
@Repository
interface ApplicationEnvironmentRepository : JpaRepository<ApplicationEnvironment, String> {

    fun findByApplicationIs(application: Application): List<ApplicationEnvironmentView>
}
