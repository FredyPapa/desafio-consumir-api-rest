import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import { Project } from 'src/app/models/project';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  listProjects!:Project[];

  constructor(
    private http:HttpClient
  ) { }

  getProjects():Observable<Project[]>{
    return this.http.get<Project[]>(`${environment.api}/project`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  getProject(id:number):Observable<Project>{
    return this.http.get<Project>(`${environment.api}/project/${id}`,{
      headers:new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  deleteProject(id:number){
    this.http.delete<Project>(`${environment.api}/project/${id}`).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }

  addProject(project:Project){
    this.http.post<Project>(`${environment.api}/project/`, project).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }

  editProject(project:Project){
    this.http.put<Project>(`${environment.api}/project/${project.id}`, project).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }

  private manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    }else{
      console.warn('Error del lado del servidor', error.error.message);
    }
    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }

}
