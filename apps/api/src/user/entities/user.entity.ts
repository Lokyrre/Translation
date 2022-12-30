import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {IEntityUser} from "@translation/types";

@Entity()
export class User implements IEntityUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  salt: string;
}
