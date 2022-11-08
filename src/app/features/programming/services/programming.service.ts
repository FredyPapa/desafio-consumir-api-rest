import { Injectable } from '@angular/core';
import { Programming } from '../../../models/programming';
import { ListProgrammings } from '../../../mocks/dataProgramming';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgrammingService {
  listProgrammings:Programming[] = ListProgrammings;
  private programmingSubject:BehaviorSubject<Programming[]>;

  constructor() {
    this.programmingSubject = new BehaviorSubject<Programming[]>(this.listProgrammings);
  }

  getProgrammings():Observable<Programming[]>{
    return this.programmingSubject.asObservable();
  }

  getProgramming(id:number):Programming{
    let index = this.listProgrammings.findIndex((item: Programming) => item.id === id);
    return this.listProgrammings[index];
  }

  deleteProgramming(id:number){
    let index = this.listProgrammings.findIndex((item: Programming) => item.id ===id);
    if(index > -1){
      this.listProgrammings[index].deleted = true;
    }
    this.programmingSubject.next(this.listProgrammings);
  }

  addProgramming(programming:Programming){
    this.listProgrammings.push(programming);
    this.programmingSubject.next(this.listProgrammings);
  }

  editProgramming(programming:Programming){
    let index = this.listProgrammings.findIndex((item: Programming) => item.id === programming.id);
    if(index > -1){
      this.listProgrammings[index] = programming;
    }
    this.programmingSubject.next(this.listProgrammings);
  }

}
