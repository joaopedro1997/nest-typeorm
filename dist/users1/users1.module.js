"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users1Module = void 0;
const common_1 = require("@nestjs/common");
const users1_service_1 = require("./users1.service");
const users1_controller_1 = require("./users1.controller");
let Users1Module = class Users1Module {
};
Users1Module = __decorate([
    (0, common_1.Module)({
        controllers: [users1_controller_1.Users1Controller],
        providers: [users1_service_1.Users1Service]
    })
], Users1Module);
exports.Users1Module = Users1Module;
//# sourceMappingURL=users1.module.js.map