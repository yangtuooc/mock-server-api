import { ProCard } from '@ant-design/pro-components';
import JavaScriptEditor, { JavaScriptEditorProps } from '@/components/Script/JavaScript';
import { useEffect, useState } from 'react';
import { findApplicationEnvironments } from '@/services/api/application';

type AppScriptSettingsProps = {
  appId: string
}

const AppScriptSettings = ({ appId }: AppScriptSettingsProps) => {

  const [mentions, setMentions] = useState<JavaScriptEditorProps['customMentions']>([]);

  useEffect(() => {
    findApplicationEnvironments({ id: appId }).then((res) => {
      const mentions = res.map((item) => {
        return {
          label: item.name,
          displayLabel: item.desc,
          value: item.value,
        };
      });
      console.log(mentions);
      setMentions(mentions);
    });
  }, [appId]);

  return (
    <ProCard
      title="脚本配置"
      headerBordered
      collapsible
      bordered
    >
      <ProCard title={'前置脚本'} headerBordered subTitle={'在请求发送之前执行'}>
        <JavaScriptEditor customMentions={mentions} />
      </ProCard>
    </ProCard>
  );
};

export default AppScriptSettings;