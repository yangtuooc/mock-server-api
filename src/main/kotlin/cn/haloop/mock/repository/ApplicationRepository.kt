package cn.haloop.mock.repository

import cn.haloop.mock.domain.Application
import cn.haloop.mock.domain.projection.ApplicationView
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.UUID

/**
 * @author yangtuo
 */
@Repository
interface ApplicationRepository : JpaRepository<Application, String> {

    fun findAllBy(pageable: Pageable): Page<ApplicationView>

    fun getApplicationById(id: String): ApplicationView
}


