"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
function validationError(validationErrors = []) {
    const messages = {};
    validationErrors.forEach((error) => {
        if (!messages[error.property]) {
            messages[error.property] = [];
        }
        Object.values(error.constraints).forEach((message) => {
            messages[error.property].push(message);
        });
    });
    const errors = messages;
    return new common_1.BadRequestException({ errors, statusCode: 400 });
}
exports.default = validationError;
//# sourceMappingURL=bad-request.exception-filters.js.map