import { Controller, Get, Post, Param,Body, Delete } from '@nestjs/common';
import { Task } from './task.model';
import{TaskService}from './task.service';



@Controller('task')
export class TaskController {
    constructor(private taskService:TaskService){}

@Post()
createTask(@Body()requestBodyDto:Task)
{
  console.log(requestBodyDto)
    return this.taskService.createTask(requestBodyDto)
}
@Get("/list")
    listTasks()
    {
       return this.taskService.listTask()
    }
    
  @Delete("/:id")
  deleteTasksById(@Param("id") id:number){
    return  this.taskService.deleteTask(id)
  
  }
}


