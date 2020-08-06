import { environment } from './../../environments/environment.dev';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ConsumeApiService {

  private baseURL = environment.baseURL;

  constructor(private http: HttpClient) { }
}
