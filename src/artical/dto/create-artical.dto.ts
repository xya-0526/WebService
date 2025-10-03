import { IsNotEmpty, ValidationArguments } from 'class-validator';
export class CreateArticalDto {
  @IsNotEmpty({
    message: (args: ValidationArguments): string => {
      return `${args.property}不能为空`;
    },
  })
  title: string;
  @IsNotEmpty({
    message: (args: ValidationArguments): string => {
      return `${args.property}不能为空`;
    },
  })
  content: string;
  @IsNotEmpty({
    message: (args: ValidationArguments): string => {
      return `${args.property}不能为空`;
    },
  })
  category: string;
}
