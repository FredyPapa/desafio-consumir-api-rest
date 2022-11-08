import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusProject'
})
export class StatusProjectPipe implements PipeTransform {

  transform(status: number): string {
    let descriptionStatus:string;
    switch (status){
      case 1:
        descriptionStatus = 'En planificación';
        break;
      case 2:
        descriptionStatus = 'En proceso';
        break;
      case 3:
        descriptionStatus = 'En pruebas';
        break;
      case 4:
        descriptionStatus = 'En producción';
        break;
      default:
        descriptionStatus = 'En planificación';
    };
    return descriptionStatus;
  }

}
