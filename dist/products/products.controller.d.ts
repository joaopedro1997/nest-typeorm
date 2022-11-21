import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Response } from 'express';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    teste(response: Response): void;
    create(createProductDto: CreateProductDto): Promise<import("./entities/product.entity").Product>;
    findAll(): Promise<import("./entities/product.entity").Product[]>;
    findOne(id: string): Promise<import("./entities/product.entity").Product>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<void>;
    remove(id: string): Promise<void>;
    loging(): void;
}
