package cn.haloop.mock.repository

import cn.haloop.mock.domain.SchemaDescription
import cn.haloop.mock.domain.projection.SchemaView
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

/**
 * @author yangtuo
 */
@Repository
interface SchemaRepository : JpaRepository<SchemaDescription, String> {


    @Query("select s from SchemaDescription s where s.app.id = :appId")
    fun findSchemasByAppId(@Param("appId") appId: String, pageable: Pageable): Page<SchemaView>

}