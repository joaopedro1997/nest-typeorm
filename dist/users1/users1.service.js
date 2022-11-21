"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users1Service = void 0;
const common_1 = require("@nestjs/common");
let Users1Service = class Users1Service {
    create(createUsers1Dto) {
        return 'This action adds a new users1';
    }
    findAll() {
        return `This action returns all users1`;
    }
    findOne(id) {
        return `This action returns a #${id} users1`;
    }
    update(id, updateUsers1Dto) {
        return `This action updates a #${id} users1`;
    }
    remove(id) {
        return `This action removes a #${id} users1`;
    }
};
Users1Service = __decorate([
    (0, common_1.Injectable)()
], Users1Service);
exports.Users1Service = Users1Service;
//# sourceMappingURL=users1.service.js.map