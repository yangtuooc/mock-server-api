import { ProCard, ProDescriptions } from '@ant-design/pro-components';
import { Button, message } from 'antd';
import React, { useEffect, useState } from 'react';
import HttpMethod from '@/components/HttpMethod/HttpMethod';
import ReactJson from 'react-json-view';
import SchemaForm from '@/pages/App/Schemas/components/SchemaForm';
import MockSchemaForm from '@/pages/App/Schemas/components/MockSchemaForm';
import { useParams } from '@@/exports';
import { getSchemaModel } from '@/services/api/pathRoute';

const dataSource = {
  name: '线索创建',
  method: 'POST',
  path: '/api/v1/leads',
  description: '提交一条用户信息，返回线索id',
};

const ApiSchemaDetail = () => {

  const { hash } = useParams();
  const [usedJsonSchema, setUsedJsonSchema] = useState({});
  const [mockSchema, setMockSchema] = useState({});

  useEffect(() => {
    getSchemaModel({ id: hash }).then((res) => {
      setUsedJsonSchema(res.jsonSchema);
    }).catch((err) => {
      console.error(err);
      return message.error('获取数据失败: ' + err);
    });
  }, [hash]);


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
          <ReactJson src={usedJsonSchema} onEdit={(edit) => {
            setUsedJsonSchema(edit.updated_src);
          }} />

        </ProCard.TabPane>
      </ProCard>
    </>
  );
};

export default ApiSchemaDetail;