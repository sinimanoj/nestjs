import { Controller ,Get, Post, Param,Body, Delete,  HttpException } from '@nestjs/common';
import{ Case} from './case.model';
import {CaseService}from './case.service';
@Controller('case')
export class CaseController {
    constructor(private caseService:CaseService){}

@Post()
createCase(@Body()requestBodyDto:Case)
{
    return this.caseService.createCase(requestBodyDto)
}
@Get("/list")
    listCase()
    {
       return this.caseService.listCase()
    }
    
  @Delete("/:id")
  deleteCase(@Param("id") id:number){
    return  this.caseService.deleteCase(id)
  
  }


}





