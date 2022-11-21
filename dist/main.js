"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const entity_not_found_exception_filters_1 = require("./exception-filters/entity-not-found.exception-filters");
const logger_middleware_1 = require("./logger/logger.middleware");
const validation_pipe_filter_1 = require("./validation-pipes/validation-pipe-filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ exceptionFactory: validation_pipe_filter_1.default }));
    app.useGlobalFilters(new entity_not_found_exception_filters_1.EntityNotFoundExceptionFilter());
    app.use(logger_middleware_1.logger);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map