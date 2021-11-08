import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity("userSessions")
export default class UserSessions{
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  userId: string;

  @Column("datetime")
  expiresAt: string;

  @CreateDateColumn()
  createdAt: string;
}