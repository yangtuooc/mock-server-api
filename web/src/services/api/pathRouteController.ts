// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取SchemaModel 获取当前请求接口的SchemaModel GET /routes/${param0} */
export async function getSchemaModel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSchemaModelParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.SchemaModel>(`${/api/}/routes/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
