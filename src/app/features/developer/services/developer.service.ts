import { Injectable } from '@angular/core';
import { Developer } from '../../../models/developer';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
  listDevelopers!:Developer[];

  constructor(
    private http:HttpClient
  ) { }

  getDevelopers():Observable<Developer[]>{
    return this.http.get<Developer[]>(`${environment.api}/developer`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  getDeveloper(id:number):Observable<Developer>{
    return this.http.get<Developer>(`${environment.api}/developer/${id}`,{
      headers:new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  deleteDeveloper(id:number){
    this.http.delete<Developer>(`${environment.api}/developer/${id}`).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }

  addDeveloper(developer:Developer){
    this.http.post<Developer>(`${environment.api}/developer/`, developer).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }

  editDeveloper(developer:Developer){
    this.http.put<Developer>(`${environment.api}/developer/${developer.id}`, developer).pipe(
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
