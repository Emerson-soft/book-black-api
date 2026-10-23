
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  email_verifield: boolean;

  @Column()
  password: string

  @Column()
  created_at: string

  @Column()
  name: string

  @Column()
  company_name: string
}
