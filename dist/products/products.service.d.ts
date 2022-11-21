import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
export declare class ProductsService {
    private ProductRepo;
    constructor(ProductRepo: Repository<Product>);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<void>;
    remove(id: number): Promise<void>;
    teste(): {
        statusCode: number;
        message: string;
    };
}
