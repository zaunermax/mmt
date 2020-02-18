import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';
import { User } from './user.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(
    () => Product,
    product => product.transactions,
  )
  product!: Product;

  @ManyToOne(() => User)
  user!: User;

  @Column()
  price!: number;

  @Column()
  amount!: number;

  @CreateDateColumn()
  createdAt!: Date;
}
