import fetch from 'isomorphic-fetch';
import _ from 'lodash'
import resolveParams from './resolveParams'

/**
 * 获取API的函数
 * @param  {string} api  'app/api'定义的接口
 * @param  {Object} opts fetch的option
 * @param  {bool}   unuseJson 返回未json格式化的数据
 * @return {Promise}
 */

export default async function fetchBy(api: string, opts: any) {
  const { method, body } = opts;

  // 处理URL
  // const url = await resolveURL(api);

  // 处理参数params
  const formData = resolveParams(body);
  var myFormData = new FormData();
  _.forEach(formData, (value, key) => { myFormData.append(key, value); });

  // 拼接后的opts
  const options = { ...opts, method, body: myFormData };
  if (!formData || method === 'GET' || method === 'HEAD') {
    delete options.body;
  }

  try {
    const json = await fetch(api, options).then(res => res.json());
    if (json.code === -2) {
      window.location.reload();
      return json;
    }

    if (json.code !== 1) {
      throw json;
    }
    return json;
  } catch (error) {
    throw error;
  }
}
