import {
  ProCard,
  ProForm,
  ProFormInstance,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormUploadDragger,
} from '@ant-design/pro-components';
import React, { useRef, useState } from 'react';


const SchemaForConfig = () => {

  const formMapRef = useRef<React.MutableRefObject<ProFormInstance | undefined>[]>([]);
  const [schemaMode, setSchemaMode] = useState('endpoint');

  const appList = [
    {
      value: '1',
      label: '应用1',
    },
    {
      value: '2',
      label: '应用2',
    },
  ];

  return (
    <>
      <ProCard
        title={'表单Schema-基本信息'}
      >
        <ProForm
          onFinish={async (values) => {
            console.log(values);
          }}
          autoFocusFirstInput
        >
          <ProFormSelect
            name="appId"
            label="应用"
            options={appList}
            placeholder="请选择应用"
            rules={[{ required: true, message: '请选择应用' }]}
          />
          <ProFormText
            name="description"
            label="描述"
            placeholder="请输入描述"
            rules={[{ required: true, message: '请输入描述' }]}
          />

          <ProFormRadio.Group
            name="schemaType"
            label="请选设置OpenAPI Schema的方式"
            radioType={'button'}
            rules={[{ required: true, message: '请选择OpenAPI Schema的设置方式' }]}
            onChange={(e) => {
              setSchemaMode(e.target.value);
            }}
            initialValue={schemaMode}
            options={[
              {
                label: '接口地址',
                value: 'endpoint',
              },
              {
                label: '上传文件',
                value: 'uploadFile',
              },
            ]}
          />

          {schemaMode === 'endpoint' && (
            <ProFormText
              name="endpoint"
              label="接口地址"
              placeholder="请输入接口地址"
              rules={[{ required: true, message: '请输入接口地址' }]}
            />
          )}

          {schemaMode === 'uploadFile' && (
            <ProFormUploadDragger
              name="file"
              label="上传文件"
              title="点击上传文件"
              rules={[{ required: true, message: '请上传文件' }]}
              max={1}
              fieldProps={{
                accept: '.json',
              }} />
          )}
        </ProForm>
      </ProCard>
    </>
  );
};

export default SchemaForConfig;