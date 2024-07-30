import { ProCard } from '@ant-design/pro-components';

type EnvironmentSettingsProps = {
  appId: string;
}

const EnvironmentSettings = ({ appId }: EnvironmentSettingsProps) => {
  return (
    <ProCard
      title={'变量配置'}
      headerBordered
      collapsible
      bordered
    >
      <div>EnvironmentSettings</div>
    </ProCard>
  );
};

export default EnvironmentSettings;