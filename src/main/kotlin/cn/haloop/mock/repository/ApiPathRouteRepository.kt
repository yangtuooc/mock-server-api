package cn.haloop.mock.repository

import cn.haloop.mock.domain.document.ApiPathRoute
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

/**
 * @author yangtuo
 */
@Repository
interface ApiPathRouteRepository : MongoRepository<ApiPathRoute, String> {
    fun findByAppIdIs(appId: String): List<ApiPathRoute>
}
