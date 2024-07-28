import { request } from '@umijs/max';

type SchemaData = {
  endpoint?: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  formData: any;
}

/** 提交schema-form表单数据 POST */
export const submitSchemaForm = async (data: SchemaData) => {
  const { endpoint, method, formData } = data;
  if (!endpoint) {
    return Promise.reject(new Error('没有配置接口地址，没有办法提交数据'));
  }
  return request(endpoint, {
    method: method,
    data: formData,
  });
};