package cn.haloop.mock.service.mapper

import cn.haloop.mock.domain.OpenApiSetting
import cn.haloop.mock.domain.dto.OpenApiSettingEdit
import org.mapstruct.Mapper
import org.mapstruct.Mapping
import org.springframework.core.convert.converter.Converter

/**
 * @author yangtuo
 */
@Mapper(config = MapperSpringConfig::class)
interface OpenApiMapper : Converter<OpenApiSetting, OpenApiSettingEdit> {


    @Mapping(target = "loadMode", source = "loadMode")
    @Mapping(target = "url", source = "url")
    @Mapping(target = "file", source = "file")
    @Mapping(target = "autoUpdate", source = "autoUpdate")
    @Mapping(target = "cron", source = "cron")
    override fun convert(source: OpenApiSetting): OpenApiSettingEdit
}