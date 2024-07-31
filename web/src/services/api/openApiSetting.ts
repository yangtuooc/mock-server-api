// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 更新OpenApi设置 更新OpenApi设置 PUT /open-api-settings/${param0} */
export async function update(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateParams,
  body: API.OpenApiSettingEdit,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`${/api/}/open-api-settings/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
