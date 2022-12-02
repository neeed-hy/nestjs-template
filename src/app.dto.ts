import { IsNotEmpty } from 'class-validator';

export class GetExampleDto {
  @IsNotEmpty({ message: 'id参数不能为空' })
  readonly id: string;
}
export class PostExampleDto {
  @IsNotEmpty({ message: 'id参数不能为空' })
  readonly id: string;
}
