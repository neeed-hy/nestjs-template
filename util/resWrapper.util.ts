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

export function ErrorRes(msg: string, code = 601) {
  return ResWrapper<null>(null, msg, code);
}
