import { Injectable,HttpException, Put, Param } from '@nestjs/common';
import{Case} from './case.model';
@Injectable()
export class CaseService {
    caseArray:Case[] = []

    createCase(cases:Case){
        this.caseArray.push(cases)
        return true
    }

    listCase(){
        return this.caseArray
    }

    view(inputId:number){
        return this.caseArray.find(item => item.id==inputId)
    }
    deleteCase(inputId:number)
    {
        var found= this.caseArray.find(item=>item.id==inputId)
        if(found)
        {
            var filteredItems =   this.caseArray.filter(item=> item.id!=inputId)
           this.caseArray = filteredItems
           return true
            
        }
        else{
            throw new HttpException("Item not found",404)
        }
    }
}
