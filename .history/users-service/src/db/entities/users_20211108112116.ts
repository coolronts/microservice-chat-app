import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity("users")
export default class Users{
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column({select: false})
  passwordHash: string;

  @CreateDateColumn()
  created_at: Date;
}