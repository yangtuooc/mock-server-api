import React from 'react';
import { ProCard, ProList } from '@ant-design/pro-components';
import { Button, Space } from 'antd';
import { useNavigate } from '@umijs/max';
import HttpMethodTag from '@/components/HttpMethod/HttpMethod';

type OpenApiDescription = {
  id: string;
  name: string;
  method: string;
  path: string;
  description: string;
};

type OpenApiTag = {
  name: string;
  description?: string;
  apiList: OpenApiDescription[];
}


type OpenApiSchemaListProps = {
  schemas: OpenApiDescription[];
}

const tags: OpenApiTag[] = [
  {
    name: '线索管理',
    description: '线索管理相关接口',
    apiList: [
      {
        id: 'de9d1967-72de-457d-9c79-3f6d24676d34',
        name: '创建线索',
        method: 'POST',
        path: '/api/v1/leads',
        description: '提交一条用户信息到表单中台，返回线索ID',
      },
      {
        id: 'de9d1967-72de-457d-9c79-3f6d24676d35',
        name: '更新线索',
        method: 'PUT',
        path: '/api/v1/leads/:id',
        description: '通过线索ID更新线索信息',
      },
      {
        id: 'de9d1967-72de-457d-9c79-3f6d24676d36',
        name: '查看线索',
        method: 'GET',
        path: '/api/v1/leads/:id',
        description: '通过线索ID查看线索信息',
      },
      {
        id: 'de9d1967-72de-457d-9c79-3f6d24676d37',
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
    apiList: [
      {
        id: 'de9d1967-72de-457d-9c79-3f6d24676d38',
        name: '查看保单',
        method: 'GET',
        path: '/api/v1/policies/:id',
        description: 'schema3 description',
      },
    ],
  },
];

const OpenApiList = () => {

  const navigate = useNavigate();

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
                <ProList<OpenApiDescription>
                  rowKey={'id'}
                  dataSource={tag.apiList}
                  metas={{
                    title: {
                      dataIndex: 'name',
                    },
                    subTitle: {
                      render: (text, record) => {
                        return (
                          <>
                            <Space size={0}>
                              <HttpMethodTag method={record.method} />
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
                        <Button key="go" type="primary" onClick={() => {
                          navigate(`/schema/${record.id}`);
                        }}>Go</Button>,
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

export default OpenApiList;