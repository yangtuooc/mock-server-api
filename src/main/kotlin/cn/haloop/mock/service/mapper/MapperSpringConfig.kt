package cn.haloop.mock.service.mapper

import org.mapstruct.MapperConfig
import org.mapstruct.ReportingPolicy

/**
 * @author yangtuo
 */
@MapperConfig(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
interface MapperSpringConfig