// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 查询应用 查询应用列表 GET /applications */
export async function findApplications(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findApplicationsParams,
  options?: { [key: string]: any },
) {
  return request<API.PagedModel>(`${/api/}/applications`, {
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
export async function create(body: API.ApplicationEdit, options?: { [key: string]: any }) {
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

/** 同步API文档 从远程获取最新的API文档，更新本地缓存 PUT /applications/${param0}/api-doc */
export async function syncApiDoc(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.syncApiDocParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`${/api/}/applications/${param0}/api-doc`, {
    method: 'PUT',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询应用API列表 查询应用的API列表 GET /applications/${param0}/api-list */
export async function findApplicationApiList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findApplicationApiListParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ApiTag[]>(`${/api/}/applications/${param0}/api-list`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询应用环境变量 查询应用的环境变量列表 GET /applications/${param0}/environments */
export async function findApplicationEnvironments(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findApplicationEnvironmentsParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ApplicationEnvironmentView[]>(`${/api/}/applications/${param0}/environments`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询OpenAPI配置 查询应用的OpenAPI配置信息 GET /applications/${param0}/open-api */
export async function findOpenApiSetting(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findOpenApiSettingParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.OpenApiSettingEdit>(`${/api/}/applications/${param0}/open-api`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 设置OpenAPI 设置应用的OpenAPI配置信息 POST /applications/${param0}/open-api */
export async function setOpenApi(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.setOpenApiParams,
  body: API.OpenApiSettingEdit,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`${/api/}/applications/${param0}/open-api`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取SchemaModel 获取指定接口的SchemaModel，包含表单schema和mock数据schema GET /applications/${param0}/schema-model/${param1} */
export async function getSchemaModel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSchemaModelParams,
  options?: { [key: string]: any },
) {
  const { id: param0, hash: param1, ...queryParams } = params;
  return request<API.SchemaModel>(`${/api/}/applications/${param0}/schema-model/${param1}`, {
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
  return request<API.PagedModel>(`${/api/}/applications/${param0}/schemas`, {
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
