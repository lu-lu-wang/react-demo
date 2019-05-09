const KEY = process.env.HOST;
// 是否加密
let isEncrypted: number, md5Key: any, DES: any, envHost;
switch (KEY) {
  case 'dev':
  case 'test':
    isEncrypted = 0;
    // envHost = (host) => `${KEY}.${host}`;
    md5Key = process.env.KEY_MD5KEY || '888';
    DES = {
      Iv: process.env.KEY_DEV_DESIV,
      Key: process.env.KEY_DEV_DESKEY
    };
    break;
  case 'uat':
    isEncrypted = 1;
    md5Key = '888';
    DES = {
      Iv: process.env.KEY_PRO_DESIV,
      Key: process.env.KEY_PRO_DESKEY
    };
    break;
  case 'pub':
  default:
    isEncrypted = 0;
    md5Key = 'Woyouxinxi666';
    DES = {
      Iv: process.env.KEY_PRO_DESIV,
      Key: process.env.KEY_PRO_DESKEY
    };
    break;
}

export {
  // envHost,
  isEncrypted,
  md5Key,
  DES
};
