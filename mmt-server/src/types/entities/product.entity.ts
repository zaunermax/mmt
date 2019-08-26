import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MapToOptional } from '../common/helpers';
import { Transaction } from './transaction.entity';
import { History } from './history.entity';

@Entity()
export class Product {
  constructor(data?: Omit<MapToOptional<Product>, 'id'>) {
    if (data) {
      if (data.amount) this.amount = data.amount;
      if (data.name) this.name = data.name;
      if (data.price) this.price = data.price;
      if (data.productionPerTick)
        this.productionPerTick = data.productionPerTick;
      if (data.imageUrl) this.imageUrl = data.imageUrl;
      if (data.description) this.description = data.description;
    }
  }

  @OneToMany(() => Transaction, transaction => transaction.product)
  transactions!: Transaction[];

  @OneToMany(() => History, history => history.product)
  history!: History[];

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  price!: number;

  @Column()
  amount!: number;

  @Column()
  productionPerTick!: number;

  @Column()
  imageUrl!: string;

  @Column({ type: 'text' })
  description!: string;
}
