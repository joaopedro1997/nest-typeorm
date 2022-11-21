"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TesteDecorator = void 0;
const common_1 = require("@nestjs/common");
const TesteDecorator = (...args) => (0, common_1.SetMetadata)('teste-decorator', args);
exports.TesteDecorator = TesteDecorator;
//# sourceMappingURL=teste-decorator.decorator.js.map