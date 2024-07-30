import { ProCard } from '@ant-design/pro-components';
import JavaScriptEditor from '@/components/Script/JavaScript';

type AppScriptSettingsProps = {
  appId: string
}

const AppScriptSettings = ({ appId }: AppScriptSettingsProps) => {
  return (
    <ProCard
      title="脚本配置"
      headerBordered
      collapsible
      bordered
    >
      <ProCard title={'前置脚本'} headerBordered subTitle={'在请求发送之前执行'}>
        <JavaScriptEditor />
      </ProCard>
    </ProCard>
  );
};

export default AppScriptSettings;