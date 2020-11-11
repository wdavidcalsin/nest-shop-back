import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { createTaskDto } from './dto/createTask.dto';
import { TaskService } from './task.service';
import { Task } from './interfaces/task';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getTasks(): Task[] {
    return this.taskService.getTasks();
  }

  @Get('/:taskId')
  getTask(@Param('taskId') taskId) {
    return this.taskService.getTask(parseInt(taskId));
  }

  @Post()
  createTask(@Body() task: createTaskDto): string {
    console.log(task.done);

    return 'Creating a task';
  }

  @Put(':id')
  updateTask(@Param('id') id): string {
    return `numero: ${id}`;
  }
}
