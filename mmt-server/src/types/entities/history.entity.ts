import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class History {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Product, product => product.history)
  product!: Product;

  @CreateDateColumn()
  timestamp!: Date;

  @Column()
  price!: number;
}
