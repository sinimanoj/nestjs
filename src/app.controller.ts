import { Task } from './task/task.model';

import {  Controller, Get, Param, Post, Body, NotFoundException, Put, Delete} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
 
  constructor(private readonly appService: AppService) {}


  @Get("/hello")
  getHello(): string {
    return this.appService.getHello();
  }


tasks:Task[]=[]
  
@Post("/create-task")
createStudent(@Body() taskDto:Task){
  
  this.tasks.push(taskDto)  
  console.log("saved");
  console.log(taskDto)
  return taskDto
}

@Get("/get-task")
getTasks(){
  console.log("request from client")
  return this.tasks
}

@Get("get-task/:id")
getTask(@Param("id") id:number){
 var found =  this.tasks.find(i => i.id==id)
 if(found){
   return found
 }else {
  
   throw new NotFoundException("Item not found")
 }
}


@Put("/update/:id")
update(@Param("id") id:number,@Body() newTaskDetails:Task){
  var found =  this.tasks.find(i => i.id==id)
  if(found){
   var item =  this.tasks.filter(i => i.id != id )
   item.push(newTaskDetails)
   this.tasks = item
  }else {
   
    throw new NotFoundException("Item not found")
  }
}



@Delete("remove-task/:id")
deleteTask(@Param("id") id:number){
 var found =  this.tasks.find(i => i.id==id)
 if(found){
  var item =  this.tasks.filter(i => i.id != id )
  this.tasks = item
 }else {
  
   throw new NotFoundException("Item not found")
 }
}
}