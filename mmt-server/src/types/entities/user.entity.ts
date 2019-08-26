import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../Role';
import { MapToOptional } from '../common/helpers';
import { Transaction } from './transaction.entity';

@Entity()
export class User {
  constructor(data?: Omit<MapToOptional<User>, 'id'>) {
    if (data) {
      if (data.role) this.role = data.role;
      if (data.balance) this.balance = data.balance;
      if (data.name) this.name = data.name;
      if (data.pwHash) this.pwHash = data.pwHash;
      if (data.inventorySpace) this.inventorySpace = data.inventorySpace;
    }
  }

  @OneToMany(() => Transaction, transaction => transaction.user)
  transactions!: Transaction[];

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  @Column()
  pwHash!: string;

  @Column('enum', { enum: Role, default: Role.player })
  role!: Role;

  @Column('int')
  balance!: number;

  @Column('int', { default: 50 })
  inventorySpace!: number;
}
