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
exports.Users1Controller = void 0;
const common_1 = require("@nestjs/common");
const users1_service_1 = require("./users1.service");
const create_users1_dto_1 = require("./dto/create-users1.dto");
const update_users1_dto_1 = require("./dto/update-users1.dto");
let Users1Controller = class Users1Controller {
    constructor(users1Service) {
        this.users1Service = users1Service;
    }
    create(createUsers1Dto) {
        return this.users1Service.create(createUsers1Dto);
    }
    findAll() {
        return this.users1Service.findAll();
    }
    findOne(id) {
        return this.users1Service.findOne(+id);
    }
    update(id, updateUsers1Dto) {
        return this.users1Service.update(+id, updateUsers1Dto);
    }
    remove(id) {
        return this.users1Service.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_users1_dto_1.CreateUsers1Dto]),
    __metadata("design:returntype", void 0)
], Users1Controller.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Users1Controller.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Users1Controller.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_users1_dto_1.UpdateUsers1Dto]),
    __metadata("design:returntype", void 0)
], Users1Controller.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Users1Controller.prototype, "remove", null);
Users1Controller = __decorate([
    (0, common_1.Controller)('users1'),
    __metadata("design:paramtypes", [users1_service_1.Users1Service])
], Users1Controller);
exports.Users1Controller = Users1Controller;
//# sourceMappingURL=users1.controller.js.map