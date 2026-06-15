import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'files', name: 'file' })
export class File {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  estudiante_id: number;

  @Column()
  user_id: number;

  @Column()
  user_updated_id: number;

  @Column()
  file_name: string;

  @Column()
  mime: string;

  @Column()
  url: string;

  @Column({ default: false })
  is_avatar: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
