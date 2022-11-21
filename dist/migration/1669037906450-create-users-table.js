"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsersTable1669037906450 = void 0;
const typeorm_1 = require("typeorm");
class createUsersTable1669037906450 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'users',
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
                    name: 'email',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'password',
                    type: 'varchar',
                    isNullable: false,
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
        await queryRunner.dropTable('users');
    }
}
exports.createUsersTable1669037906450 = createUsersTable1669037906450;
//# sourceMappingURL=1669037906450-create-users-table.js.map