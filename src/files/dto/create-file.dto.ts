import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateFileDto {
  @IsNumber()
  estudiante_id: number;

  @IsNumber()
  user_id: number;

  @IsNumber()
  user_updated_id: number;

  @IsString()
  file_name: string;

  @IsString()
  mime: string;

  @IsString()
  url: string;

  @IsBoolean()
  is_avatar?: boolean;
}
