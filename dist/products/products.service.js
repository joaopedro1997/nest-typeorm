"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const product_entity_1 = require("./entities/product.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let ProductsService = class ProductsService {
    constructor(ProductRepo) {
        this.ProductRepo = ProductRepo;
    }
    create(createProductDto) {
        const product = this.ProductRepo.create(createProductDto);
        return this.ProductRepo.save(product);
    }
    findAll() {
        return this.ProductRepo.find();
    }
    findOne(id) {
        return this.ProductRepo.findOneByOrFail({ id });
    }
    async update(id, updateProductDto) {
        const updateResult = await this.ProductRepo.update(id, updateProductDto);
        if (!updateResult.affected) {
            throw new typeorm_1.EntityNotFoundError(product_entity_1.Product, id);
        }
    }
    async remove(id) {
        const deleteResult = await this.ProductRepo.delete({ id });
        if (!deleteResult.affected) {
            throw new typeorm_1.EntityNotFoundError(product_entity_1.Product, id);
        }
    }
    teste() {
        return {
            statusCode: 200,
            message: "ok"
        };
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map