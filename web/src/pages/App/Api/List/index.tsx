import { ProCard } from '@ant-design/pro-components';
import OpenApiList from '@/pages/App/Api/components/OpenApiSchemaList';

type ApplicationSchemaListProps = {
  id: string;
};


const ApplicationSchemaList = () => {
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
        <OpenApiList />
      </ProCard>
    </>
  );
};

export default ApplicationSchemaList;