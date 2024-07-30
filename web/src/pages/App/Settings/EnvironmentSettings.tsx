import { EditableProTable, ProCard } from '@ant-design/pro-components';

type EnvironmentSettingsProps = {
  appId: string;
}

function getNewId() {
  return (Math.random() * 1000).toFixed(0);
}

const EnvironmentSettings = ({ appId }: EnvironmentSettingsProps) => {

  return (
    <ProCard
      title={'变量配置'}
      headerBordered
      collapsible
      bordered
    >
      <EditableProTable
        rowKey="id"
        recordCreatorProps={{
          newRecordType: 'dataSource',
          position: 'bottom',
          record: () => ({ id: getNewId() }),
        }}
        columns={[
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
            valueType: 'input',
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
        ]}
      />
    </ProCard>
  );
};

export default EnvironmentSettings;