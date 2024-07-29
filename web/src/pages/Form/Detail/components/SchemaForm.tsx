import { createForm } from '@formily/core';
import { createSchemaField, FormProvider } from '@formily/react';
import { FormButtonGroup, FormItem, Input, Reset, Submit, Switch } from '@formily/antd-v5';

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

const fetchMockData = () => {
  console.log('fetch mock data');
};

const submitForm = () => {
  console.log('submit form');
};

const SchemaForm = ({ jsonSchema }: SchemaFormProps) => {

  const form = createForm();

  return (
    <FormProvider form={form}>
      <SchemaField schema={jsonSchema} />
      <FormButtonGroup align={'center'}>
        <Submit ghost onSubmit={fetchMockData}>生成数据</Submit>
        <Submit onSubmit={submitForm}>提交</Submit>
        <Reset>重置</Reset>
      </FormButtonGroup>
    </FormProvider>
  );
};

export default SchemaForm;