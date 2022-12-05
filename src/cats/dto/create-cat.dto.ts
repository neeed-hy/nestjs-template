import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty({ message: 'name参数不能为空' })
  readonly name: string;

  @IsNotEmpty({ message: 'age参数不能为空' })
  @IsNumberString()
  readonly age: number;

  readonly breed: string;
}
