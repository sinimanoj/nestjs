import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { CaseModule } from './case/case.module';

@Module({
  imports: [TaskModule, CaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
