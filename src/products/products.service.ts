import { Product } from './entities/product.entity';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { EntityNotFoundError, Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private ProductRepo: Repository<Product>
  ) {}

  create(createProductDto: CreateProductDto) {
    const product = this.ProductRepo.create(createProductDto);
    return this.ProductRepo.save(product);
  }

  findAll() {
    return this.ProductRepo.find()
  }

  findOne(id: number) {
    return this.ProductRepo.findOneByOrFail({id});
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const updateResult = await this.ProductRepo.update(id, updateProductDto);
    if(!updateResult.affected) {
      throw new EntityNotFoundError(Product, id)
    }
  }

  async remove(id: number) {
    const deleteResult = await this.ProductRepo.delete({id});
    if(!deleteResult.affected) {
      throw new EntityNotFoundError(Product, id)
    }
  }

  teste() {
    return {
      statusCode: 200,
      message: "ok"
    };
  }
}
