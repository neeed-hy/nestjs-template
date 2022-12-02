import { Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export function ControllerLogger(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const requestParam = JSON.stringify(
    Object.keys(req.query).length > 0 ? req.query : req.body,
  );
  const requestTime = new Date().toLocaleString();
  Logger.log(
    `请求${req.url},请求方法:${req.method},请求时间:${requestTime},请求参数:${requestParam}`,
  );
  next();
}
