import { HttpClientModule } from '@angular/common/http';
import { environment } from './../../environments/environment.dev';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConsumeApiService {

  private baseURL = environment.baseURL;

  constructor(private http: HttpClient) { }
}
