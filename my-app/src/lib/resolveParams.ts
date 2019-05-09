// import Des from './Des';

import md5 from 'md5';
// @ts-ignore
import { isEncrypted, md5Key } from './env';

export function signEncode(form: any) {
  if (!md5Key) {
    throw new Error('请检查config配置文件！no md5Key');
  }

  const key = md5Key;
  const { params, timeStamp, randomNum } = form;
  return md5(params + isEncrypted + timeStamp + randomNum + md5(key));
}

export function paramsEncode(params: object) {

  const paramsString = JSON.stringify(params);
  if (isEncrypted) {
    // 此处Des加密Des.encrypt(paramsString)
    return paramsString;
  } else {
    return paramsString;
  }
}

export default function resolveParams(params: any) {
  var formData: any = {};
  formData.timeStamp = Math.floor(new Date().getTime() / 1000);
  formData.randomNum = Math.floor(Math.random() * 1000000);
  formData.isEncrypted = isEncrypted;
  if (!params) {
    formData.params = '';
  } else {
    if (params.file) {
      formData.file = params.file;
      delete params.file;
    }
    formData.params = paramsEncode(params);
  }
  formData.sign = signEncode(formData);
  formData.lang = 'zh';
  return formData;
}
