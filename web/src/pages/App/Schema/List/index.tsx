import { ProCard } from '@ant-design/pro-components';
import OpenApiSchemaList from '@/pages/App/Schema/components/OpenApiSchemaList';

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
        title={'Schema列表'}
        style={{
          marginBottom: 16,
        }}
      >
        <OpenApiSchemaList />
      </ProCard>
    </>
  );
};

export default ApplicationSchemaList;