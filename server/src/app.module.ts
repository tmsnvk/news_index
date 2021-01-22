import { HttpModule, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import configuration from "./config/configuration";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      load: [configuration]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}