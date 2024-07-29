import { ProCard, ProForm, ProFormRadio, ProFormText, ProFormUploadDragger } from '@ant-design/pro-components';
import React, { useState } from 'react';
import { Button } from 'antd';

const OpenApiSetting = () => {

  const [schemaMode, setSchemaMode] = useState('endpoint');
  const [editMode, setEditMode] = useState(false);

  return (
    <>
      <ProCard
        title={'OpenAPI设置'}
        headerBordered
        bordered
        style={{
          marginBottom: 16,
        }}
        extra={
          <Button
            onClick={() => {
              setEditMode(!editMode);
            }}
            danger={!editMode}
          >
            {editMode ? '取消' : '编辑'}
          </Button>
        }
      >
        <ProForm
          onFinish={async (values) => {
            console.log(values);
          }}
          autoFocusFirstInput
          disabled={!editMode}
        >
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

export default OpenApiSetting;