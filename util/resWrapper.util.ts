export interface IRes<T> {
  data: T;
  msg: string;
  code: number;
}

function ResWrapper<T>(data: T, msg: string, code: number): IRes<T> {
  return {
    data,
    msg,
    code,
  };
}

export function SuccessRes<T>(data: T, msg = '') {
  return ResWrapper(data, msg, 200);
}

export function ErrorRes<T>(param: {
  msg: string;
  data?: T;
  code?: number;
}): IRes<T>;
export function ErrorRes(param: string): IRes<null>;
export function ErrorRes<T>(
  param: { msg: string; data?: T; code?: number } | string,
) {
  if (typeof param === 'string') {
    return ResWrapper<null>(null, param, 601);
  } else {
    const { data, msg, code } = param;
    return ResWrapper<T>(data || null, msg || '', code || 601);
  }
}
