import { createSchemaField, FormProvider } from '@formily/react';
import { FormButtonGroup, FormItem, Reset, Select, Submit } from '@formily/antd-v5';
import { createForm } from '@formily/core';

type MockSchemaFormProps = {
  jsonSchema: any
  mockConfigOptions: any
}

const jsonSchema: any = {
  'type': 'object',
  'properties': {
    'clueId': {
      'type': 'string',
      'title': '线索id',
      'x-component': 'Select',
      'x-decorator': 'FormItem',
      'enum': [
        { label: 'uuid', value: 'uuid' },
        { label: '雪花id', value: 'snowflake' },
      ],
    },
    'realTimePush': {
      'type': 'boolean',
      'title': '是否实时推送',
      'x-component': 'Select',
      'x-decorator': 'FormItem',
      'enum': [
        { label: '随机: true/false', value: 'random' },
        { label: '是/true', value: 'true' },
        { label: '否/false', value: 'false' },
      ],
    },
  },
};

const SchemaField = createSchemaField({
  components: {
    Select,
    FormItem,
  },
});

const submitForm = (values) => {
  console.log('submit form', values);
};

const MockSchemaForm = () => {

  const form = createForm({
    initialValues: {
      clueId: 'uuid',
      realTimePush: 'random',
    },
  });

  return (
    <FormProvider form={form}>
      <SchemaField schema={jsonSchema} />
      <FormButtonGroup align={'center'}>
        <Submit onSubmit={submitForm}>提交</Submit>
        <Reset>重置</Reset>
      </FormButtonGroup>
    </FormProvider>
  );
};

export default MockSchemaForm;