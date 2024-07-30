import { ProCard } from '@ant-design/pro-components';
import JavaScriptEditor from '@/pages/App/Script/JavaScript';

const AppScript = () => {
  return (
    <ProCard
      title="脚本配置"
      headerBordered
      collapsible
    >
      <ProCard title={'前置脚本'} headerBordered>
        <JavaScriptEditor />
      </ProCard>
    </ProCard>
  );
};

export default AppScript;