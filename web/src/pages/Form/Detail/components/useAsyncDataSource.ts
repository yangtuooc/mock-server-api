import { Field } from '@formily/core';
import { action } from '@formily/reactive';


/**
 * 异步数据源，用于表单组件的数据源
 * @param url  请求地址
 * @param transform 数据转换函数
 */
export const useAsyncDataSource =
  (url: string, transform: (data: any) => any) => (field: Field) => {
    field.loading = true;
    fetch(url)
    .then((res) => res.json())
    .then(
      action.bound?.((data) => {
        field.dataSource = transform(data);
        field.loading = false;
      }),
    );
  };