import { ProCoreActionType, ProTable } from '@ant-design/pro-components';
import { findApplications, switchStatus } from '@/services/api/application';
import { Button, message, Tag } from 'antd';
import { useRef } from 'react';
import { useNavigate } from '@umijs/max';

const AppList = () => {

  const navigate = useNavigate();
  const actionRef = useRef<ProCoreActionType>();

  const pageRequest = async (params: API.Pageable) => {
    const { pageSize, current } = params;
    const res = await findApplications({ pageable: { page: current - 1, size: pageSize } });
    return {
      data: res.content,
      success: res.success,
      total: res.totalElements,
    };
  };

  const handleSwitch = (record: API.ApplicationView) => {
    switchStatus({ id: record.id }).then(() => {
      actionRef.current?.reload();
      return message.success('操作成功');
    }).catch((err) => {
      return message.error(err.message);
    });
  };

  return (
    <ProTable<API.PageApplicationView, API.Pageable>
      actionRef={actionRef}
      headerTitle={'应用列表'}
      request={pageRequest}
      rowKey="id"
      columns={[
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '名称',
          dataIndex: 'name',
        },
        {
          title: '服务地址',
          dataIndex: 'endpoint',
          render: (text: string | undefined) => {
            return (
              text && (
                <a href={text} target="_blank" rel="noreferrer" onClick={(e) => e.preventDefault()}>
                  {text}
                </a>
              )
            );
          },
        },
        {
          title: '状态',
          dataIndex: 'enabled',
          render: (text, record) => {
            return (
              <Tag color={record.enabled ? 'success' : 'error'}>
                {record.enabled ? '启用' : '禁用'}
              </Tag>
            );
          },
        },
        {
          title: '描述',
          dataIndex: 'description',
        },
        {
          title: '创建时间',
          dataIndex: 'createdAt',
          valueType: 'dateTime',
        },
        {
          title: '操作',
          valueType: 'option',
          render: (text, record: API.ApplicationView) => [
            <Button key={'switch'} type={'link'} onClick={() => {
              handleSwitch(record);
            }}>
              {record.enabled ? '禁用' : '启用'}
            </Button>,
            <Button key={'show'} type={'link'} onClick={() => {
              navigate(`/app/${record.id}`);
            }}>
              查看
            </Button>,
          ],
        },
      ]}
      search={false}
    />
  );
};

export default AppList;