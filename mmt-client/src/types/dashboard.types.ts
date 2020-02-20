import { TokenUser } from './auth.types';

export interface Transaction {
  id: number;
  product: Product;
  user?: TokenUser;
  price: number;
  amount: number;
  createAt: Date;
}

export interface History {
  id: number;
  product?: Product;
  timestamp: Date;
  price: number;
}

export interface Product {
  id: number;
  transactions?: Transaction[];
  history?: History[];
  name: string;
  price: number;
  amount: number;
  productionPerTick: number;
  imageUrl: string;
  description: string;
}
