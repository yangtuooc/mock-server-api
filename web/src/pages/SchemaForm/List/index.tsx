// import { ProList } from '@ant-design/pro-components';
// import { findFormSchemaByPage, getFormSchema } from '@/services/api/formSchema';
// import { useEffect, useState } from 'react';
// import { Button, message, Space, Tag } from 'antd';
// import ShowModal from '@/pages/SchemaForm/ShowModal';
//
// const SchemaList = () => {
//
//   const [formSchemaList, setFormSchemaList] = useState<API.FormSchema[]>([]);
//   const [showModal, setShowModal] = useState<boolean>(false);
//   const [currentSchema, setCurrentSchema] = useState<API.SchemaDetail | null>(null);
//
//   useEffect(() => {
//     findFormSchemaByPage({}).then((response) => {
//       if (response) {
//         setFormSchemaList(response.content);
//       } else {
//         return message.error('获取表单Schema列表失败');
//       }
//     });
//   }, []);
//
//   const onShow = (record: API.FormSchema) => {
//     getFormSchema({id: record.id}).then((response) => {
//       if (response) {
//         setCurrentSchema(response);
//       } else {
//         return message.error('获取表单Schema详情失败: ' + record.id);
//       }
//     }).catch((error) => {
//       return message.error('获取表单Schema详情失败: ' + record.id + '错误信息: ' + error);
//     });
//     setShowModal(true);
//   };
//
//   return (
//     <>
//       <ProList<API.FormSchema>
//         dataSource={formSchemaList}
//         rowKey="id"
//         headerTitle="表单Schema列表"
//         showActions={'hover'}
//         onDataSourceChange={setFormSchemaList}
//         metas={{
//           title: {
//             dataIndex: 'name',
//           },
//           description: {
//             dataIndex: 'description',
//           },
//           subTitle: {
//             render: (text, row, index, action) => {
//               return (
//                 <Space size={0}>
//                   <Tag color="blue">{row.version}</Tag>
//                   <Tag color="green">{row.enabled ? '启用' : '禁用'}</Tag>
//                 </Space>
//               );
//             },
//           },
//           actions: {
//             render: (text, record) => [
//               <a key="view" onClick={() => onShow(record)}>查看</a>,
//               <a key="disable" onClick={() => {
//               }}>禁用</a>,
//             ],
//           },
//         }}
//       />
//       {
//         showModal && currentSchema && (
//           <ShowModal visible={showModal} onCancel={() => {
//             setShowModal(false);
//           }} schema={currentSchema} />
//         )
//       }
//     </>
//   );
// };
//
// export default SchemaList;