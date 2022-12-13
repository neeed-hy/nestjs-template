import {
  Injectable,
  NestInterceptor,
  CallHandler,
  ExecutionContext,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      map((data) => {
        // 约定：满足{data:any,code:number,msg:string}样式的数据为自定义返回
        const { code, msg } = data;
        const realData = code && msg ? data.data : data;
        return {
          data: realData,
          code: code || 200,
          msg: msg || 'success',
        };
      }),
    );
  }
}
