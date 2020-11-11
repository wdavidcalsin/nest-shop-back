import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import { TaskController } from './task/task.controller';
// import { TaskService } from './task/task.service';
import { TaskModule } from './task/task.module';
import { AppService } from './app.service';

@Module({
  imports: [TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
