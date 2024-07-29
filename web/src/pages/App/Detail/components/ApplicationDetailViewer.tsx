import React, { useRef } from 'react';
import { ProCard, ProDescriptions, ProDescriptionsActionType } from '@ant-design/pro-components';
import { Button, Tag } from 'antd';

type ApplicationDetailViewerProps = {
  dataSource: API.ApplicationView;
};


const ApplicationDetailViewer: React.FC<ApplicationDetailViewerProps> = (props) => {
  const actionRef = useRef<ProDescriptionsActionType>();
  return (
    <ProCard>
      <ProDescriptions<API.ApplicationView>
        actionRef={actionRef}
        title={'应用详情'}
        dataSource={props.dataSource}
        extra={
          <Button
            type={'primary'}
            onClick={() => {
              history.back();
            }}>
            返回
          </Button>
        }
      >
        <ProDescriptions.Item label={'应用code'} dataIndex={'code'} />
        <ProDescriptions.Item label={'应用名称'} dataIndex={'name'} />
        <ProDescriptions.Item label={'状态'} dataIndex={'enabled'}
                              render={
                                (enabled) => enabled ?
                                  <Tag color={'success'}>启用</Tag> :
                                  <Tag color={'error'}>禁用</Tag>}
        />
        <ProDescriptions.Item label={'服务地址'} dataIndex={'endpoint'} render={
          (endpoint: string) => <a href={endpoint} target={'_blank'}>{endpoint}</a>
        } />
        <ProDescriptions.Item label={'创建时间'} dataIndex={'createdAt'} valueType={'dateTime'} />
        <ProDescriptions.Item label={'描述'} dataIndex={'description'} />
      </ProDescriptions>
    </ProCard>
  );
};

export default ApplicationDetailViewer;