import { FieldDataSource } from '@formily/core';

interface AddressInfo {
  code: string;
  name: string;
  cities?: Record<string, AddressInfo>;
  districts?: Record<string, string>;
}


/**
 * 转换地址数据
 * @param data  地址数据
 */
export const transformAddress = (data: Record<string, AddressInfo | string> = {}) => {
  return Object.entries(data).reduce<FieldDataSource>((buf, [key, value]) => {
    if (typeof value === 'string')
      return buf.concat({
        label: value,
        value: key,
      });
    const { name, code, cities, districts } = value;
    const _cities = transformAddress(cities);
    const _districts = transformAddress(districts);
    return buf.concat({
      label: name,
      value: code,
      children: _cities.length
        ? _cities
        : _districts.length
          ? _districts
          : undefined,
    });
  }, []);
};