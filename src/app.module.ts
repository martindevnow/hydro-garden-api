import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotionService } from './services/notion/notion.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, NotionService],
})
export class AppModule {}
