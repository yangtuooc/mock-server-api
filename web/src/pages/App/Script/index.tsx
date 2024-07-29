import { ProCard } from '@ant-design/pro-components';
import JavaEditor from '@/pages/App/Script/Java';

const AppScript = () => {
  return (
    <ProCard
      title="脚本配置"
      headerBordered
      collapsible
    >
      <ProCard title={'前置脚本'} headerBordered>
        <JavaEditor />
      </ProCard>
    </ProCard>
  );
};

export default AppScript;