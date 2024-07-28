import React from 'react';
import { Button, Tag } from 'antd';
import { ProTable } from '@ant-design/pro-components';

type ApplicationSchemaTableProps = {
  onLoad: (current?: number, pageSize?: number) => Promise<{
    data: API.SchemaDescriptorView[];
    success: boolean;
    total: number;
  }>;
}


const ApplicationSchemaTable: React.FC<ApplicationSchemaTableProps> = ({ onLoad }) => {
  return (
    <ProTable<API.SchemaDescriptorView>
      headerTitle={'Schema列表'}
      rowKey={'id'}
      search={false}
      request={async (params) => {
        return onLoad(params.current, params.pageSize);
      }}
      pagination={{
        showQuickJumper: true,
        totalBoundaryShowSizeChanger: 0,
      }}
      columns={[
        {
          title: '名称',
          dataIndex: 'name',
        },
        {
          title: '接口地址',
          dataIndex: 'pathSegments',
          render: (pathSegments: string[]) => {
            const path = '/' + pathSegments.join('/');
            return (
              <a href={path} target={'_blank'} onClick={(e) => {
                e.preventDefault();
              }}>
                {path}
              </a>
            );
          },
        },
        {
          title: '兼容的接口版本',
          dataIndex: 'version',
          render: (version: string) => <Tag color={'blue'}>{version}</Tag>,
        },
        {
          title: '是否启用',
          dataIndex: 'enabled',
          render: (enabled: boolean) => enabled ?
            <Tag color={'success'}>启用</Tag> :
            <Tag color={'error'}>禁用</Tag>,
        },
        {
          title: '操作',
          valueType: 'option',
          render: (text, record: API.SchemaDescriptorView) => [
            <Button key={'edit'} type={'link'} onClick={() => {
              alert('编辑: ' + record.id);
            }}>
              编辑
            </Button>,
          ],
        },
      ]}
    />
  );
};

export default ApplicationSchemaTable;