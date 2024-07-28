// import { useParams } from '@@/exports';
// import ApplicationDetailViewer from '@/pages/App/Detail/components/ApplicationDetailViewer';
// import ApplicationSchemaTable from '@/pages/App/Detail/components/ApplicationSchemaTable';
// import { useEffect, useState } from 'react';
// import { findSchemas, getApplication } from '@/services/api/application';
// import { message } from 'antd';
//
// const AppDetail = () => {
//
//   const { id } = useParams();
//
//   const [appDetail, setAppDetail] = useState<API.ApplicationDetailView>(null);
//   const [schemaPage, setSchemaPage] = useState<API.PageSchemaDescriptorView>(null);
//
//   const findSchemasByPage = (current: number, pageSize: number) => {
//     const request: API.findSchemasParams = {
//       id: id,
//       arg1: { page: current - 1, size: pageSize },
//     };
//
//     findSchemas(request).then((data) => {
//       setSchemaPage(data);
//     }).catch((e) => {
//       return message.error('获取Schema列表失败: ', e);
//     });
//   };
//
//   useEffect(() => {
//     getApplication({ id: id }).then((data) => {
//       setAppDetail(data);
//     }).catch((e) => {
//       return message.error('获取应用详情失败: ', e);
//     });
//   }, [id]);
//
//   useEffect(() => {
//     findSchemasByPage(0, 10);
//   }, [id]);
//
//   const onPaginationLoad = async (current?: number, pageSize?: number): Promise<{
//     data: API.SchemaDescriptorView[];
//     success: boolean;
//     total: number;
//   }> => {
//     const request: API.findSchemasParams = {
//       id: id,
//       arg1: { page: current - 1, size: pageSize },
//     };
//     const res = await findSchemas(request);
//     return {
//       data: res.content,
//       success: res.success,
//       total: res.totalElements,
//     };
//   };
//
//   return (
//     <>
//       <ApplicationDetailViewer dataSource={appDetail} />
//       <br />
//
//       <ApplicationSchemaTable onLoad={onPaginationLoad} />
//     </>
//   );
// };
//
// export default AppDetail;