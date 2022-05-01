import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coffee } from './coffee';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCoffeeList(){
    return this.http.get<Coffee[]>(`${this.apiUrl}`);
  }
}
