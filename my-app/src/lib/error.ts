import * as Sentry from '@sentry/browser';

interface ResponseData {
  code: number;
  data: any;
  msg: string;
}

export class FetchError implements Error {
  name: string;
  message: string;
  code: number;
  constructor(json: ResponseData) {
    this.name = '接口异常';
    this.code = json.code;
    this.message = json.msg;
  }
}

export function reportError(error: any) {
  Sentry.withScope((scope: any) => {
    Object.keys(error).forEach(key => {
      scope.setExtra(key, error);
    });
    Sentry.captureException(error);
  });
}

// fetch异常
export const onFetchError = (error: any, api?: any) => {
  // console.log(error);
  throw new FetchError({ ...error, msg: `${api}  ${error.msg}` });
};
