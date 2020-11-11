import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/task';
import { TaskController } from './task.controller';

@Injectable()
export class TaskService {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Testing',
      description: 'Testing description',
      done: true,
    },
    {
      id: 2,
      title: 'David',
      description: 'David practicando',
      done: true,
    },
    {
      id: 3,
      title: 'Devding',
      description: 'Devding description',
      done: true,
    },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: number): Task {
    return this.tasks.find((task) => task.id === id);
  }
}
