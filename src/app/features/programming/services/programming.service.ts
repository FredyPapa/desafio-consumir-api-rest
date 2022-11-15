import { Injectable } from '@angular/core';
import { Programming } from '../../../models/programming';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProgrammingService {
  listProgrammings!:Programming[];

  constructor(
    private http:HttpClient
  ) { }

  getProgrammings():Observable<Programming[]>{
    return this.http.get<Programming[]>(`${environment.api}/programming`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  getProgramming(id:number):Observable<Programming>{
    return this.http.get<Programming>(`${environment.api}/programming/${id}`,{
      headers:new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  deleteProgramming(id:number){
    this.http.delete<Programming>(`${environment.api}/programming/${id}`).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }

  addProgramming(programming:Programming){
    this.http.post<Programming>(`${environment.api}/programming/`, programming).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }

  editProgramming(programming:Programming){
    this.http.put<Programming>(`${environment.api}/programming/${programming.id}`, programming).pipe(
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
