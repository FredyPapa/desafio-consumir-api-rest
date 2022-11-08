import { Injectable } from '@angular/core';
import { ListDevelopers } from 'src/app/mocks/dataDeveloper';
import { Developer } from '../../../models/developer';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
  listDevelopers:Developer[] = ListDevelopers;
  private developerSubject:BehaviorSubject<Developer[]>;

  constructor() {
    this.developerSubject = new BehaviorSubject<Developer[]>(this.listDevelopers);
  }

  getDevelopers():Observable<Developer[]>{
    return this.developerSubject.asObservable();
  }

  getDeveloper(id:number):Developer{
    let index = this.listDevelopers.findIndex((item: Developer) => item.id === id);
    return this.listDevelopers[index];
  }

  deleteDeveloper(id:number){
    let index = this.listDevelopers.findIndex((item: Developer) => item.id ===id);
    if(index > -1){
      this.listDevelopers[index].deleted = true;
    }
    this.developerSubject.next(this.listDevelopers);
  }

  addDeveloper(developer:Developer){
    this.listDevelopers.push(developer);
    this.developerSubject.next(this.listDevelopers);
  }

  editDeveloper(developer:Developer){
    let index = this.listDevelopers.findIndex((item: Developer) => item.id === developer.id);
    if(index > -1){
      this.listDevelopers[index] = developer;
    }
    this.developerSubject.next(this.listDevelopers);
  }

}
