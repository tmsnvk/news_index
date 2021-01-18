import { NestFactory } from "@nestjs/core";
import * as helmet from "helmet";
import * as compression from "compression";
import { AppModule } from "./app.module";

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: true,
      preflightContinue: false
    }
  });

  app.use(helmet({
    contentSecurityPolicy: false
  }));
  app.use(compression());

  const port = process.env.PORT || 3001;
  const handleListen = (): void => console.log(`===> project-002 server @ port ${port}! <===`);
  app.listen(port, handleListen);
}

bootstrap();