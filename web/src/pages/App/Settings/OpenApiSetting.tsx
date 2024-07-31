import { ProCard, ProForm, ProFormRadio, ProFormText, ProFormUploadDragger } from '@ant-design/pro-components';
import React, { useState } from 'react';
import { Button, message } from 'antd';
import { findOpenApiSetting, setOpenApi } from '@/services/api/application';


type OpenApiSettingProps = {
  appId: string;
}

const syncOpenApi = (appId: string) => {
  return message.success('同步成功');
};

const OpenApiSetting: React.FC<OpenApiSettingProps> = ({ appId }) => {

  const [schemaMode, setSchemaMode] = useState('endpoint');
  const [editMode, setEditMode] = useState(false);
  const [autoUpdate, setAutoUpdate] = useState(false);
  const [onCollapse, setOnCollapse] = useState(false);

  const handleFinish = async (appId: string, values: API.OpenApiSettingEdit) => {
    setOpenApi({ id: appId }, values).then(() => {
      setEditMode(false);
      return message.success('设置成功');
    }).catch((err) => {
      return message.error('设置失败: ', err);
    });
  };

  return (
    <>
      <ProCard
        title={'OpenAPI配置'}
        collapsible
        bordered
        headerBordered
        defaultCollapsed={true}
        style={{
          marginBottom: 16,
        }}
        onCollapse={setOnCollapse}
        extra={
          !onCollapse && (
            <>
              <Button type={'primary'} style={{ marginRight: 10 }} onClick={() => {
                return syncOpenApi(appId);
              }}>
                同步
              </Button>
              <Button
                onClick={() => {
                  setEditMode(!editMode);
                }}
                danger={!editMode}
              >
                {editMode ? '取消' : '编辑'}
              </Button>
            </>
          )
        }
      >
        <ProForm<API.OpenApiSettingEdit>
          onFinish={(values) => {
            return handleFinish(appId, values);
          }}
          autoFocusFirstInput
          disabled={!editMode}
          request={async () => {
            const res = await findOpenApiSetting({ id: appId });
            if (res) {
              return res;
            }
            setEditMode(true);
            return {};
          }}
        >
          <ProFormRadio.Group
            name="loadModel"
            label="请选择添加OpenAPI接口文档的方式"
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
            <>
              <ProFormText
                name="url"
                label="接口地址"
                placeholder="请输入接口地址"
                rules={[{ required: true, message: '请输入接口地址' }]}
              />
              <ProFormRadio.Group
                name="autoUpdate"
                label="自动同步"
                radioType={'button'}
                initialValue={autoUpdate}
                onChange={(e) => {
                  setAutoUpdate(e.target.value);
                }}
                options={[
                  {
                    label: '是',
                    value: true,
                  },
                  {
                    label: '否',
                    value: false,
                  },
                ]}
              />
              {autoUpdate && (
                <ProFormText
                  name="cron"
                  label="CRON表达式"
                  placeholder="请输入CRON表达式"
                  rules={[{ required: true, message: '请输入CRON表达式' }]}
                />
              )}
            </>
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