import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    user_id: number;

    @Column({ type: 'timestamp', default: () => 'now() AT TIME ZONE UTC' })
    created_at: Date
}