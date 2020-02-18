import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../Role';
import { Transaction } from './transaction.entity';

@Entity()
export class User {
  constructor(data?: Omit<Partial<User>, 'id'>) {
    if (data) Object.assign(this, data);
  }

  @OneToMany(
    () => Transaction,
    transaction => transaction.user,
  )
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
