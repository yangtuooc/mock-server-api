import React from 'react';
import { ProList } from '@ant-design/pro-components';
import { Button } from 'antd';

const data = [
  {
    id: 1,
    title: '表单中台',
    subTitle: '这是一段副标题',
    description: '这是一段描述',
  },
  {
    id: 2,
    title: '数据中台',
    subTitle: '这是一段副标题',
    description: '这是一段描述',
  },
].map((item) => ({
  title: item.title,
  subTitle: item.subTitle,
  description: item.description,
  actions: [
    <Button key={'delete'} type={'link'}>删除</Button>,
  ],
}));


const HomePage: React.FC = () => {

  return (
    <ProList
      headerTitle={'应用列表'}
      cardBordered
      grid={{ gutter: 18, column: 6 }}
      metas={{
        title: {},
        subTitle: {},
        description: {},
        avatar: {},
        content: {},
        actions: {},
      }}
      dataSource={data}
    >

    </ProList>
  );
};

export default HomePage;
