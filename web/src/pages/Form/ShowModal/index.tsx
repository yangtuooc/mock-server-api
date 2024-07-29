// import { message, Modal } from 'antd';
// import React from 'react';
// import validator from '@rjsf/validator-ajv8';
// import { submitSchemaForm } from '@/services/schemaApi';
// import { createSchemaField, FormProvider, useForm } from '@formily/react';
// import { FormItem, FormLayout, Input, Submit, FormButtonGroup, Switch, Reset } from '@formily/antd-v5';
// import { createForm } from '@formily/core';
//
//
// type ShowModalProps = {
//   visible: boolean;
//   onCancel: () => void;
//   schema: API.SchemaDetail;
// }
//
// const SchemaField = createSchemaField({
//   components: {
//     Input,
//     FormItem,
//     Switch,
//   },
// });
//
// const ShowModal: React.FC<ShowModalProps> = ({ visible, onCancel, schema }) => {
//
//   const jsonSchema = JSON.parse(schema.requestSchema as string);
//   const form = createForm()
//
//   const handleSubmit = (formData: any) => {
//     const endpoint = schema.endpoint;
//     submitSchemaForm({ endpoint: endpoint, method: 'POST', formData: formData }).catch((error) => {
//       return message.error('提交表单失败: ' + error);
//     });
//   };
//
//   const handleGenerateData = () => {
//     // 生成数据
//     form.setFormState((state) => {
//       state.values = {
//         clueId: '746cf6f6-6804-407a-9bfc-7b03741e1513',
//         realTimePush: true,
//         specifiedAppCode:'BMC',
//         customerName:'张三',
//         customerPhone:'13000000000'
//       }
//     })
//   }
//
//   return (
//     <Modal
//       title={schema.schemaName}
//       open={visible}
//       onCancel={onCancel}
//       footer={null}
//       width={800}
//     >
//       <FormProvider form={form}>
//         <FormLayout labelCol={6} wrapperCol={6}>
//           <SchemaField schema={jsonSchema} />
//         </FormLayout>
//         <FormButtonGroup>
//           <Submit onSubmit={handleGenerateData}>生成数据</Submit>
//         </FormButtonGroup>
//         <FormButtonGroup align={'center'}>
//           <Submit onSubmit={handleSubmit}>提交</Submit>
//           <Reset>重置</Reset>
//         </FormButtonGroup>
//       </FormProvider>
//     </Modal>
//   );
// };
//
// export default ShowModal;