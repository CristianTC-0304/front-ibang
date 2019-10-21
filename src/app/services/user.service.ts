import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  login(user: User): Observable<any> {
    return this.httpClient.post(`${environment.connectiondb}/login`, user)
  }

  register(user: User): Observable<any> {
    return this.httpClient.post(`${environment.connectiondb}/register`, user)
  }
}
