import { createForm } from '@formily/core';
import { createSchemaField, FormProvider } from '@formily/react';
import { FormButtonGroup, FormItem, FormLayout, Input, Reset, Submit, Switch } from '@formily/antd-v5';
import { Modal } from 'antd';

type SchemaFormProps = {
  jsonSchema: any
}

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
    Switch,
  },
});

const SchemaForm = ({ jsonSchema }: SchemaFormProps) => {

  const form = createForm();

  return (
    <FormProvider form={form}>
      <SchemaField schema={jsonSchema} />
      <FormButtonGroup>
        <Submit onSubmit={() => {
          console.log('submit');
        }}>生成数据</Submit>
      </FormButtonGroup>
      <FormButtonGroup align={'center'}>
        <Submit onSubmit={() => {
          console.log('submit');
        }}>提交</Submit>
        <Reset>重置</Reset>
      </FormButtonGroup>
    </FormProvider>
  );
};

export default SchemaForm;