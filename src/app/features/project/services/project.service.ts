import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { Project } from 'src/app/models/project';
import { ListProjects } from '../../../mocks/dataProject';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  listProjects:Project[] = ListProjects;
  private projectsSubject:BehaviorSubject<Project[]>;

  constructor() {
    this.projectsSubject = new BehaviorSubject<Project[]>(this.listProjects);
  }

  getProjects():Observable<Project[]>{
    return this.projectsSubject.asObservable();
  }

  getProject(id:number):Project{
    let index = this.listProjects.findIndex((item: Project) => item.id === id);
    return this.listProjects[index];
  }

  deleteProject(id:number){
    let index = this.listProjects.findIndex((item: Project) => item.id ===id);
    if(index > -1){
      this.listProjects[index].deleted = true;
    }
    this.projectsSubject.next(this.listProjects);
  }

  addProject(project:Project){
    this.listProjects.push(project);
    this.projectsSubject.next(this.listProjects);
  }

  editProject(project:Project){
    let index = this.listProjects.findIndex((item: Project) => item.id === project.id);
    if(index > -1){
      this.listProjects[index] = project;
    }
    this.projectsSubject.next(this.listProjects);
  }

}
