"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductsTable1668799441559 = void 0;
const typeorm_1 = require("typeorm");
class CreateProductsTable1668799441559 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'products',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'price',
                    type: 'double precision'
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: "now()",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    isNullable: true
                },
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('products');
    }
}
exports.CreateProductsTable1668799441559 = CreateProductsTable1668799441559;
//# sourceMappingURL=1668799441559-create-products-table.js.map