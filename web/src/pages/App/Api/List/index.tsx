import { ProCard } from '@ant-design/pro-components';
import OpenApiList from '@/pages/App/Api/components/OpenApiList';
import { useEffect, useState } from 'react';
import { findApplicationApiList } from '@/services/api/application';

type ApplicationSchemaListProps = {
  appId: string;
};


const ApplicationApiList = ({ appId }: ApplicationSchemaListProps) => {

  const [tags, setTags] = useState<API.ApiTag[]>([]);

  useEffect(() => {
    findApplicationApiList({ id: appId }).then((data) => {
      setTags(data);
    });
  }, [appId]);

  return (
    <>
      <ProCard
        collapsible
        bordered
        headerBordered
        title={'API列表'}
        style={{
          marginBottom: 16,
        }}
      >
        <OpenApiList appId={appId} tags={tags} />
      </ProCard>
    </>
  );
};

export default ApplicationApiList;