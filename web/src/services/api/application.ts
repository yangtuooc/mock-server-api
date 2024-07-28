// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 查询应用 查询应用列表 GET /applications */
export async function findApplications(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findApplicationsParams,
  options?: { [key: string]: any },
) {
  return request<API.PageApplicationView>(`${/api/}/applications`, {
    method: 'GET',
    params: {
      ...params,
      pageable: undefined,
      ...params['pageable'],
    },
    ...(options || {}),
  });
}

/** 创建应用 创建一个新的应用 POST /applications */
export async function create(body: API.ApplicationCreate, options?: { [key: string]: any }) {
  return request<any>(`${/api/}/applications`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取应用 获取应用详情 GET /applications/${param0} */
export async function getApplication(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getApplicationParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ApplicationView>(`${/api/}/applications/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询应用Schema 查询应用Schema列表 GET /applications/${param0}/schemas */
export async function findApplicationSchemas(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findApplicationSchemasParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.PageSchemaView>(`${/api/}/applications/${param0}/schemas`, {
    method: 'GET',
    params: {
      ...queryParams,
      pageable: undefined,
      ...queryParams['pageable'],
    },
    ...(options || {}),
  });
}

/** 切换应用状态 切换应用状态: 启用/禁用 POST /applications/${param0}/switch-status */
export async function switchStatus(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.switchStatusParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`${/api/}/applications/${param0}/switch-status`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}
