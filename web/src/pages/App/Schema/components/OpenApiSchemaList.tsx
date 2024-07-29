import React from 'react';
import { ProCard, ProList } from '@ant-design/pro-components';
import { Button, Space, Tag } from 'antd';

type OpenApiSchema = {
  id: string;
  name: string;
  method: string;
  path: string;
  description: string;
};

type OpenApiTag = {
  name: string;
  description?: string;
  schemas: OpenApiSchema[];
}


type OpenApiSchemaListProps = {
  schemas: OpenApiSchema[];
}

const tags: OpenApiTag[] = [
  {
    name: '线索管理',
    description: '线索管理相关接口',
    schemas: [
      {
        id: '1',
        name: '创建线索',
        method: 'POST',
        path: '/api/v1/leads',
        description: '提交一条用户信息到表单中台，返回线索ID',
      },
      {
        id: '2',
        name: '更新线索',
        method: 'PUT',
        path: '/api/v1/leads/:id',
        description: '通过线索ID更新线索信息',
      },
      {
        id: '3',
        name: '查看线索',
        method: 'GET',
        path: '/api/v1/leads/:id',
        description: '通过线索ID查看线索信息',
      },
      {
        id: '4',
        name: '删除线索',
        method: 'DELETE',
        path: '/api/v1/leads/:id',
        description: '通过线索ID删除线索',
      },
    ],
  },
  {
    name: '保单管理',
    description: '保单管理相关接口',
    schemas: [
      {
        id: '3',
        name: '查看保单',
        method: 'GET',
        path: '/api/v1/policies/:id',
        description: 'schema3 description',
      },
    ],
  },
];

const OpenApiSchemaList = () => {
  return (
    <>
      {
        tags.map((tag, index) => {
          return (
            <ProCard bordered headerBordered collapsible
                     title={tag.name} key={tag.name}
                     subTitle={tag.description}
                     tabIndex={index} style={{ marginBottom: 10 }}
                     ghost={false}
            >
              {
                <ProList<OpenApiSchema>
                  rowKey={'id'}
                  dataSource={tag.schemas}
                  metas={{
                    title: {
                      dataIndex: 'name',
                    },
                    subTitle: {
                      render: (text, record) => {
                        return (
                          <>
                            <Space size={0}>
                              {record.method === 'GET' && (
                                <Tag color="blue-inverse">GET</Tag>
                              )}
                              {record.method === 'POST' && (
                                <Tag color="green-inverse">POST</Tag>
                              )}
                              {record.method === 'PUT' && (
                                <Tag color="orange-inverse">PUT</Tag>
                              )}
                              {record.method === 'DELETE' && (
                                <Tag color="red-inverse">DELETE</Tag>
                              )}
                              <a>{record.path}</a>
                            </Space>
                          </>
                        );
                      },
                    },
                    description: {
                      dataIndex: 'description',
                    },
                    actions: {
                      render: (text, record) => [
                        <Button key="go" type="primary">Go</Button>,
                      ],
                    },
                  }}
                />
              }
            </ProCard>
          );
        })
      }
    </>
  );
};

export default OpenApiSchemaList;