import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  listUsers(): Observable<User[]> {
    return this.http.get<User[]>('api/v1/users');
  }

  fetchUser(userId: number): Observable<User> {
    return this.http.get<User>(`api/v1/users/${userId}`);
  }
}
