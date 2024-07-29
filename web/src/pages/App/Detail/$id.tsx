import { useParams } from '@@/exports';
import ApplicationDetailViewer from '@/pages/App/Detail/components/ApplicationDetailViewer';
import { useEffect, useState } from 'react';
import { getApplication } from '@/services/api/application';
import { message } from 'antd';
import OpenApiSetting from '@/pages/App/Detail/components/OpenApiSetting';
import ApplicationApiList from '@/pages/App/Api/List';

const AppDetail = () => {

  const { id } = useParams();

  const [appView, setAppView] = useState<API.ApplicationView>(null);
  // const [schemaPage, setSchemaPage] = useState<API.PageSchemaDescriptorView>(null);


  useEffect(() => {
    getApplication({ id: id }).then((data) => {
      return setAppView(data);
    }).catch((e) => {
      return message.error('获取应用详情失败: ', e);
    });
  }, [id]);

  return (
    <>
      <ApplicationDetailViewer dataSource={appView} />
      <OpenApiSetting appId={id} />
      {/*<ApplicationSchemaTable onLoad={onPaginationLoad} />*/}
      <ApplicationApiList />
    </>
  );
};

export default AppDetail;