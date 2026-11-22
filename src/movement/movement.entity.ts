import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "../customer/customer.entity.js";

@Entity()
export class Movement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    customer_id: number;

    @Column()
    description: string;

    @Column()
    amount: number;

    @Column()
    quantity: number;

    @Column()
    is_expense: boolean;

    @Column({ type: 'timestamp', default: () => 'now() AT TIME ZONE "utc"' })
    created_at: Date;

    @ManyToOne(() => Customer, (customer) => customer.id)
    @JoinColumn({ name: 'customer_id' })
    customer: Customer;
}