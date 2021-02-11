import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import configuration from "./config/configuration";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DataModule } from "./data/data.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    DataModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ]
})

export class AppModule {}