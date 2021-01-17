"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const helmet = require("helmet");
const compression = require("compression");
const app_module_1 = require("./app.module");
const bootstrap = async () => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: { origin: true, preflightContinue: false } });
    app.use(helmet({ contentSecurityPolicy: false }));
    app.use(compression());
    const port = process.env.PORT || 3001;
    const handleListen = () => console.log(`===> project-002 server @ port ${port}! <===`);
    app.listen(port, handleListen);
};
bootstrap();
//# sourceMappingURL=main.js.map