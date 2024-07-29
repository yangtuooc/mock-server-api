export const mockDataConfigSchema: any = {
  'type': 'object',
  'properties': {
    'clueId': {
      'type': 'string',
      'title': '线索id',
      'required': true,
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
      'required': true,
      'x-component': 'Select',
      'x-decorator': 'FormItem',
      'enum': [
        { label: '随机: true/false', value: 'random' },
        { label: '是/true', value: 'true' },
        { label: '否/false', value: 'false' },
      ],
    },
    'region': {
      'type': 'string',
      'title': '地址选择',
      'required': true,
      'x-component': 'Select',
      'x-decorator': 'FormItem',
      'enum': [
        { label: '联动数据', value: 'linkage' },
      ],
    },
  },
};