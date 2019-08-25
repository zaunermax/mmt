import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../Role';
import { MapToOptional } from '../common/helpers';

@Entity()
export class User {
  constructor(data?: Omit<MapToOptional<User>, 'id'>) {
    if (data) {
      if (data.role) this.role = data.role;
      if (data.balance) this.balance = data.balance;
      if (data.name) this.name = data.name;
      if (data.pwHash) this.pwHash = data.pwHash;
    }
  }

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
}
