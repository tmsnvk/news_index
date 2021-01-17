import { NestFactory } from "@nestjs/core";
import * as helmet from "helmet";
import * as compression from "compression";
import { AppModule } from "./app.module";

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule, { cors: { origin: true, preflightContinue: false }});
  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(compression());
  await app.listen(process.env.PORT || 3001);
}

bootstrap();