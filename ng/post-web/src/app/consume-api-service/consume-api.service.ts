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

  private attListaPosts = false;

  private httpOptions;

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
  }

  public teveAtualizacaoLista(): boolean {
    return this.attListaPosts;
  }

  public pegarTodosPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.baseURL + 'posts')
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  public pegarPostPorId(id): Observable<Post> {
    return this.httpClient.get<Post>(this.baseURL + `post?id=` + id)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  public salvarPost(postRequest: Post): Observable<Post> {
    this.attListaPosts = true;
    return this.httpClient.post<Post>(environment.baseURL + 'post', postRequest);
  }

  public deletarPost(id: string): Observable<void> {
    this.attListaPosts = true;
    return this.httpClient.delete<void>(environment.baseURL + '/post?id=' + id);
  }

  public editarPost(postRequest: Post): Observable<Post> {
    this.attListaPosts = true;
    return this.httpClient.put<Post>(environment.baseURL + 'post', postRequest);
  }

  public storeToEdit(post: Post) {
    this.editPost = post;
  }

  public  getEditPost() {
    return this.editPost;
  }

  private handleError(error: HttpErrorResponse) {
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

}
