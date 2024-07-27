package cn.haloop.mock.domain

import jakarta.persistence.Column
import jakarta.persistence.MappedSuperclass
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import java.time.LocalDateTime

/**
 * @author yangtuo
 */
@MappedSuperclass
abstract class AbstractAuditable {

    /**
     * 创建时间.
     */
    @CreatedDate
    @Column(name = "created_at", updatable = false)
    open var createdAt: LocalDateTime? = LocalDateTime.now()

    /**
     * 更新时间.
     */
    @LastModifiedDate
    @Column(name = "updated_at")
    open var updatedAt: LocalDateTime? = null
}