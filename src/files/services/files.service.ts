import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { File } from '../entities/file.entity';
import { CreateFileDto } from '../dto/create-file.dto';
@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(File)
    private readonly fileRepository: Repository<File>,
  ) {}

  async create(data: CreateFileDto) {
    const oldAvatar = await this.fileRepository.findOne({
      where: {
        estudiante_id: data.estudiante_id,
        is_avatar: true,
      },
    });

    if (oldAvatar) {
      await this.fileRepository.remove(oldAvatar);
    }

    const file = this.fileRepository.create({
      estudiante_id: data.estudiante_id,
      user_id: data.user_id,
      user_updated_id: data.user_updated_id,
      file_name: data.file_name,
      mime: data.mime,
      url: data.url,
      is_avatar: data.is_avatar || false,
    });
    return this.fileRepository.save(file);
  }

  async findByStudent(estudianteId: number) {
    console.log(await this.fileRepository.find({}));
    return this.fileRepository.findOne({
      where: {
        estudiante_id: estudianteId,
        is_avatar: true,
      },
    });
  }

  async remove(estudianteId: number) {
    await this.fileRepository.delete({
      estudiante_id: estudianteId,
      is_avatar: true,
    });

    return {
      message: 'Archivos eliminados',
    };
  }
}
