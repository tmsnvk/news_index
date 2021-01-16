import { NestFactory } from "@nestjs/core";
import * as helmet from "helmet";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: { origin: true, preflightContinue: false }});
  app.use(helmet({ contentSecurityPolicy: false }));
  await app.listen(process.env.PORT || 3001);
}
bootstrap();