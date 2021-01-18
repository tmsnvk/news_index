import { HttpModule, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DataController } from "./data.controller";
import { DataService } from "./data.service";

@Module({
  imports: [
    HttpModule, 
    ConfigModule.forRoot({ isGlobal: true })
  ],
  controllers: [DataController],
  providers: [DataService],
})

export class AppModule {}