export const mockClueFormSchema: any = {
  'type': 'object',
  'properties': {
    'clueId': {
      'type': 'string',
      'description': '线索id',
      'title': '线索id',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
      'x-component-props': {
        'style': {
          'width': 240,
        },
      },
    },
    'realTimePush': {
      'type': 'boolean',
      'description': '是否实时推送，true表示实时推送，false表示非实时推送',
      'title': '是否实时推送',
      'x-component': 'Switch',
      'x-decorator': 'FormItem',
    },
    'specifiedAppCode': {
      'type': 'string',
      'description': '指定推送的appCode',
      'title': '指定推送的appCode',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
      'x-component-props': {
        'style': {
          'width': 240,
        },
      },
    },
    'customerName': {
      'type': 'string',
      'description': '客户姓名',
      'title': '客户姓名',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
      'x-component-props': {
        'style': {
          'width': 240,
        },
      },
    },
    'gender': {
      'type': 'integer',
      'format': 'int32',
      'description': '性别，1表示男，2表示女',
      'title': '性别',
      'x-component': 'Radio.Group',
      'x-decorator': 'FormItem',
      'enum': [
        { 'label': '男', 'value': 1 },
        { 'label': '女', 'value': 2 },
      ],
    },
    'phone': {
      'type': 'string',
      'description': '手机号',
      'title': '手机号',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
      'x-component-props': {
        'style': {
          'width': 240,
        },
      },
    },
    'residentPlace': {
      'type': 'string',
      'description': '居住地',
      'title': '居住地',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
      'x-component-props': {
        'style': {
          'width': 240,
        },
      },
    },
    'region': {
      'type': 'string',
      'title': '地址选择',
      'x-decorator': 'FormItem',
      'x-component': 'Cascader',
      'x-component-props': {
        'style': {
          'width': 240,
        },
      },
      'x-reactions': [
        '{{useAsyncDataSource("//unpkg.com/china-location/dist/location.json",transformAddress)}}',
      ],
    },
    'provinceCode': {
      'type': 'string',
      'description': '省份编码',
      'title': '省份编码',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
      'x-component-props': {
        'style': {
          'width': 240,
        },
      },
    },
    'cityCode': {
      'type': 'string',
      'description': '城市编码',
      'title': '城市编码',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
      'x-component-props': {
        'style': {
          'width': 240,
        },
      },
    },
    'areaCode': {
      'type': 'string',
      'description': '区县编码',
      'title': '区县编码',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
      'x-component-props': {
        'style': {
          'width': 240,
        },
      },
    },
    'birthYear': {
      'type': 'integer',
      'format': 'int32',
      'description': '出生年',
      'title': '出生年',
      'x-component': 'NumberPicker',
      'x-decorator': 'FormItem',
      'x-component-props': {
        'style': {
          'width': 240,
        },
      },
    },
    'birthMonth': {
      'type': 'integer',
      'format': 'int32',
      'description': '出生月',
      'title': '出生月',
      'x-component': 'NumberPicker',
      'x-decorator': 'FormItem',
      'x-component-props': {
        'style': {
          'width': 240,
        },
      },
    },
    'birthDay': {
      'type': 'integer',
      'format': 'int32',
      'description': '出生日',
      'title': '出生日',
      'x-component': 'NumberPicker',
      'x-decorator': 'FormItem',
      'x-component-props': {
        'style': {
          'width': 240,
        },
      },
    },
    'age': {
      'type': 'integer',
      'format': 'int32',
      'description': '年龄',
      'title': '年龄',
      'x-component': 'NumberPicker',
      'x-decorator': 'FormItem',
      'x-component-props': {
        'style': {
          'width': 240,
        },
      },
    },
    'ageRange': {
      'type': 'string',
      'description': '年龄段',
      'title': '年龄段',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
      'x-component-props': {
        'style': {
          'width': 240,
        },
      },
    },
    'previouslyInsured': {
      'type': 'string',
      'description': '是否有保险',
      'title': '是否有保险',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
      'x-component-props': {
        'style': {
          'width': 240,
        },
      },
    },
    'consultingNeeds': {
      'type': 'string',
      'description': '咨询需求',
      'title': '咨询需求',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
      'x-component-props': {
        'style': {
          'width': 240,
        },
      },
    },
    'insuranceBudget': {
      'type': 'string',
      'description': '保险预算',
      'title': '保险预算',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
      'x-component-props': {
        'style': {
          'width': 240,
        },
      },
    },
    'personalAnnualIncome': {
      'type': 'string',
      'description': '个人年收入',
      'title': '个人年收入',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
      'x-component-props': {
        'style': {
          'width': 240,
        },
      },
    },
    'familyAnnualIncome': {
      'type': 'string',
      'description': '家庭年收入',
      'title': '家庭年收入',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
      'x-component-props': {
        'style': {
          'width': 240,
        },
      },
    },
    'authorizedOrganization': {
      'type': 'string',
      'description': '授权机构',
      'title': '授权机构',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
      'x-component-props': {
        'style': {
          'width': 240,
        },
      },
    },
    'channelCode': {
      'type': 'string',
      'description': '渠道编码',
      'title': '渠道编码',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
      'x-component-props': {
        'style': {
          'width': 240,
        },
      },
    },
    'subChannelCode': {
      'type': 'string',
      'description': '子渠道编码',
      'title': '子渠道编码',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
      'x-component-props': {
        'style': {
          'width': 240,
        },
      },
    },
    'clueGrade': {
      'type': 'string',
      'description': '线索等级',
      'title': '线索等级',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
      'x-component-props': {
        'style': {
          'width': 240,
        },
      },
    },
    'idCardNo': {
      'type': 'string',
      'description': '身份证号',
      'title': '身份证号',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
      'x-component-props': {
        'style': {
          'width': 240,
        },
      },
    },
    'productCode': {
      'type': 'string',
      'description': '产品编码',
      'title': '产品编码',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
      'x-component-props': {
        'style': {
          'width': 240,
        },
      },
    },
    'productVersion': {
      'type': 'string',
      'description': '产品版本',
      'title': '产品版本',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
      'x-component-props': {
        'style': {
          'width': 240,
        },
      },
    },
    // 'tags': { fixme: 暂时不可用
    //   'type': 'array',
    //   'title': '标签组',
    //   'description': '标签组',
    //   'items': {
    //     'type': 'string',
    //     'description': '标签',
    //     'title': '标签',
    //     'x-component': 'ArrayItems.Item',
    //     'x-decorator': 'FormItem',
    //   },
    //   'x-component': 'ArrayItems',
    //   'x-decorator': 'FormItem',
    // },
    'useType': {
      'type': 'integer',
      'format': 'int32',
      'description': '使用类型，1 正式 2 测试',
      'title': '使用类型',
      'x-component': 'Radio.Group',
      'x-decorator': 'FormItem',
      'enum': [
        { 'label': '正式', 'value': 1 },
        { 'label': '测试', 'value': 2 },
      ],
    },
    'ext': {
      'type': 'object',
    },
  },
};