import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
@Entity('avatar')
export class Avatar {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  avatar: string;
  @JoinColumn()
  @OneToOne(() => User, (user) => user.avatar)
  user: User;
}
