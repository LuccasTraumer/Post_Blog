import { Observable, throwError } from 'rxjs';
import { environment } from './../../environments/environment.dev';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Post } from '../models/post';


@Injectable({
  providedIn: 'root'
})
export class ConsumeApiService {

  private baseURL = environment.baseURL;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<Post[]> {

    return this.httpClient.get<Post[]>(this.baseURL + 'posts')
      .pipe(
        retry(2),
        catchError(this.handleError))

    //return this.http.get<Post[]>(this.baseURL + 'post');
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
