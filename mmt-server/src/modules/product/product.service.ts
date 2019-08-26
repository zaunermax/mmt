import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../../types/entities/product.entity';
import { Repository } from 'typeorm';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAllProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }
}
