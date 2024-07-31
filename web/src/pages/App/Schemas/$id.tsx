import { ProCard, ProDescriptions } from '@ant-design/pro-components';
import { Button } from 'antd';
import React, { useState } from 'react';
import { useParams } from '@@/exports';
import HttpMethod from '@/components/HttpMethod/HttpMethod';
import ReactJson from 'react-json-view';
import { mockClueFormSchema } from '@/mock/mockClueFormSchema';
import SchemaForm from '@/pages/App/Schemas/components/SchemaForm';
import MockSchemaForm from '@/pages/App/Schemas/components/MockSchemaForm';

const dataSource = {
  name: '线索创建',
  method: 'POST',
  path: '/api/v1/leads',
  description: '提交一条用户信息，返回线索id',
};

const schema = mockClueFormSchema;

type ApiSchemaDetailProps = {
  jsonSchema: any,
  mockSchema: any,
}

const ApiSchemaDetail = () => {

  const { appId, hash } = useParams();
  console.log('hash', hash);
  console.log('appId', appId);

  const [usedJsonSchema, setUsedJsonSchema] = useState(schema);

  return (
    <>
      <ProCard
        bordered
        style={{
          marginBottom: 16,
        }}
      >
        <ProDescriptions
          title={'接口详情'}
          dataSource={dataSource}
          extra={
            <Button
              type={'primary'}
              onClick={() => {
                history.back();
              }}>
              返回
            </Button>
          }
        >
          <ProDescriptions.Item label={'名称'} dataIndex={'name'} />
          <ProDescriptions.Item label={'接口路径'} dataIndex={'path'}
                                renderText={(text) => {
                                  return <a>{text}</a>;
                                }}
          />

          <ProDescriptions.Item label={'请求类型'} dataIndex={'method'}
                                renderText={(method) => {
                                  return <HttpMethod method={method} />;
                                }}
          />
          <ProDescriptions.Item label={'描述'} dataIndex={'description'} />
        </ProDescriptions>
      </ProCard>

      {/* schema */}
      <ProCard tabs={{ type: 'card' }}>

        <ProCard.TabPane key={'schemaForm'} tab={'表单信息'}>
          <SchemaForm jsonSchema={usedJsonSchema} />
        </ProCard.TabPane>

        <ProCard.TabPane key={'mockSchema'} tab={'mock数据配置'}>
          <MockSchemaForm />
        </ProCard.TabPane>

        <ProCard.TabPane key={'jsonSchema'} tab={'jsonSchema'}>
          <ReactJson src={schema} onEdit={(edit) => {
            setUsedJsonSchema(edit.updated_src);
          }} />

        </ProCard.TabPane>
      </ProCard>
    </>
  );
};

export default ApiSchemaDetail;