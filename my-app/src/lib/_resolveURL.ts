let API: any;
import _ from 'lodash';
// @ts-ignore
import { envHost } from '../../env';
const delay = async (item: any, time: any) => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(item); }, time);
  });
};

export async function getAPI() {
  if (process.env.NODE_ENV === 'production') {
    // @ts-ignore
    return import('data/api.json');// tslint:disable-line
  } else {
    return API;
  }
}

export function setApi(api: any) {
  API = api;
}

export async function getConfig(): Promise<any> {
  // @ts-ignore
  return import('data/config.json');
}

export default async function resolveURL(api: string) {
  API = _.keyBy((await getAPI()), 'name');

  if (!API[api]) {
    throw new Error(
      `未定义的接口${api},请在[api层]添加接口定义`
    );
  }

  const { pathArray } = API[api];
  if (!pathArray) {
    throw new Error(
      `请设置${api}的pathArray属性`
    );
  }
  const [host, path] = pathArray;
  if (!host || !path) {
    throw new Error(
      `请设置${api}的正确的pathArray属性`
    );
  }
  const { modulePaths } = await getConfig();
  const currentHost = _.keyBy(modulePaths, 'value')[host];
  const currentPath = _.keyBy(currentHost.children, 'value')[path].label;

  return `//${envHost(currentHost.label)}${currentPath}${api}`;
}
