import { EditableProTable, ProCard } from '@ant-design/pro-components';
import { findApplicationEnvironments } from '@/services/api/application';
import { useEffect, useState } from 'react';

type EnvironmentSettingsProps = {
  appId: string;
}

function getNewId() {
  return (Math.random() * 1000).toFixed(0);
}

const columns = [
  {
    title: '变量名',
    dataIndex: 'name',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '变量名为必填项',
        },
      ],
    },
  },
  {
    title: '变量值',
    dataIndex: 'value',
    valueType: 'password',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '变量值为必填项',
        },
      ],
    },
  },
  {
    title: '变量描述',
    dataIndex: 'desc',
    valueType: 'input',
  },
  {
    title: '操作',
    valueType: 'option',
    width: 200,
    render: (text, record, _, action) => {
      return [
        <a key="editable" onClick={() => {
          action.startEditable?.(record.id);
        }}>编辑</a>,
      ];
    },
  },
];


const EnvironmentSettings = ({ appId }: EnvironmentSettingsProps) => {

  const [value, setValue] = useState<API.ApplicationEnvironmentView[]>([]);

  useEffect(() => {
    findApplicationEnvironments({ id: appId }).then((res) => {
      setValue(res);
    });
  }, [appId]);

  return (
    <ProCard
      title={'变量配置'}
      headerBordered
      collapsible
      bordered
      defaultCollapsed={true}
    >
      <EditableProTable<API.ApplicationEnvironmentView>
        rowKey="id"
        value={value}
        recordCreatorProps={{
          newRecordType: 'dataSource',
          position: 'bottom',
          record: () => ({ id: getNewId() }),
        }}
        columns={columns}
      />
    </ProCard>
  );
};

export default EnvironmentSettings;