import { Tag } from 'antd';

type HttpMethodProps = {
  method: string;
};

const HttpMethod = ({ method }: HttpMethodProps) => {
  return (
    <>
      {method === 'GET' && (
        <Tag color={'blue-inverse'}>GET</Tag>
      )}
      {method === 'POST' && (
        <Tag color={'green-inverse'}>POST</Tag>
      )}
      {method === 'PUT' && (
        <Tag color={'orange-inverse'}>PUT</Tag>
      )}
      {method === 'DELETE' && (
        <Tag color={'red-inverse'}>DELETE</Tag>
      )}
    </>
  );
};

export default HttpMethod;