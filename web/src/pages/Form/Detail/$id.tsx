import { ProCard, ProDescriptions } from '@ant-design/pro-components';
import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
import { useParams } from '@@/exports';
import HttpMethod from '@/components/HttpMethod/HttpMethod';
import SchemaForm from '@/pages/Form/Detail/components/SchemaForm';

const dataSource = {
  name: '线索创建',
  method: 'POST',
  path: '/api/v1/leads',
  description: '提交一条用户信息，返回线索id',
};

const schema = {
  'type': 'object',
  'properties': {
    'clueId': {
      'type': 'string',
      'title': '线索id',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
    },
    'realTimePush': {
      'type': 'boolean',
      'title': '是否实时推送',
      'x-component': 'Switch',
      'x-decorator': 'FormItem',
    },
  },
};

const ApiSchemaDetail = () => {

  const { id } = useParams();
  const [showSchema, setShowSchema] = useState(false);

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
      <ProCard
        bordered
        headerBordered
        title={'表单信息'}
        extra={
          <Button type={'primary'} onClick={() => {
            setShowSchema(!showSchema);
          }}>
            查看Schema
          </Button>
        }
      >

        <SchemaForm jsonSchema={schema} />

        {/* schema view */}
        <Drawer
          open={showSchema}
          onClose={() => {
            setShowSchema(!showSchema);
          }}
          getContainer={false}
        >
        </Drawer>
      </ProCard>
    </>
  );
};

export default ApiSchemaDetail;