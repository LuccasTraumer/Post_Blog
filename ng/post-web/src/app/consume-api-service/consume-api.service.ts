import { Post } from './../models/post';
import { Observable, throwError } from 'rxjs';
import { environment } from './../../environments/environment.dev';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ConsumeApiService {

  private editPost: Post;
  private baseURL = environment.baseURL;

  private httpOptions;

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
  }

  pegarTodosPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.baseURL + 'posts')
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  pegarPostPorId(id): Observable<Post> {
    return this.httpClient.get<Post>(this.baseURL + `post?id=` + id)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  salvarPost(postRequest: Post): Observable<Post> {
    return this.httpClient.post<Post>(environment.baseURL + 'post', postRequest);
  }

  editarPost(postRequest: Post): Observable<Post> {
    return this.httpClient.put<Post>(environment.baseURL + 'post', postRequest);
  }

  // deleta um Post
  deletarPost(id: string): Observable<void> {
    return this.httpClient.delete<void>(environment.baseURL + '/post?id=' + id);
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
    alert(errorMessage);
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  storeToEdit(post: Post) {
    this.editPost = post;
  }

  getEditPost() {
    return this.editPost;
  }
}
