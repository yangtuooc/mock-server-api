import { createForm } from '@formily/core';
import { createSchemaField, FormProvider } from '@formily/react';
import { useAsyncDataSource } from '@/pages/App/Schemas/components/useAsyncDataSource';
import { transformAddress } from '@/pages/App/Schemas/components/transformAddress';
import {
  ArrayItems,
  Cascader,
  FormButtonGroup,
  FormItem,
  Input,
  NumberPicker,
  Radio,
  Reset,
  Submit,
  Switch,
} from '@formily/antd-v5';


type SchemaFormProps = {
  jsonSchema: any
}

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
    Switch,
    Radio,
    Cascader,
    NumberPicker,
    ArrayItems,
  },
});

const fetchMockData = () => {
  console.log('fetch mock data');
};

const submitForm = (values) => {
  console.log('submit form:', values);
};

const SchemaForm = ({ jsonSchema }: SchemaFormProps) => {

  const form = createForm();

  return (
    <FormProvider form={form}>
      <SchemaField
        schema={jsonSchema}
        scope={{ useAsyncDataSource, transformAddress }}
      />
      <FormButtonGroup align={'center'}>
        <Submit ghost onSubmit={fetchMockData}>生成数据</Submit>
        <Submit onSubmit={submitForm}>提交</Submit>
        <Reset>重置</Reset>
      </FormButtonGroup>
    </FormProvider>
  );
};

export default SchemaForm;