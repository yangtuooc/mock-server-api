import React from 'react';
import { ProCard, ProList } from '@ant-design/pro-components';
import { Button, Space } from 'antd';
import { useNavigate } from '@umijs/max';
import HttpMethodTag from '@/components/HttpMethod/HttpMethod';

type Api = {
  hash: string;
  name: string;
  method: string;
  path: string;
  description: string;
};


type OpenApiSchemaListProps = {
  appId: string,
  tags: API.ApiTag[]
}


const OpenApiList = ({ appId, tags }: OpenApiSchemaListProps) => {

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
                <ProList<API.Api>
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
                          navigate(`/schemas/${record.hash}`);
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