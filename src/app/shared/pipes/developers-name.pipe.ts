import { Pipe, PipeTransform } from '@angular/core';
import { Developer } from '../../models/developer';

@Pipe({
  name: 'developersName'
})
export class DevelopersNamePipe implements PipeTransform {

  transform(developers: Developer[]): string {
    let developersName:string="";
    for (const developer of developers) {
      developersName+=`[${developer.firstName} ${developer.lastName}]`;
      developersName+=" ";
    }
    return developersName;
  }

}
