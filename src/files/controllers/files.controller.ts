import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FilesService } from '../services/files.service';
import { CreateFileDto } from '../dto/create-file.dto';

@Controller()
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @MessagePattern('upload_file')
  create(@Payload() data: CreateFileDto) {
    return this.filesService.create(data);
  }

  @MessagePattern('find_file_by_student')
  findByStudent(@Payload() studentId: number) {
    return this.filesService.findByStudent(studentId);
  }

  @MessagePattern('delete_file')
  remove(@Payload() studentId: number) {
    return this.filesService.remove(studentId);
  }
}
