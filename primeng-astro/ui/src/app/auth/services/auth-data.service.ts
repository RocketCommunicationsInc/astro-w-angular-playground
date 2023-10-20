import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';

import { User, userKey } from '../auth.model';

@Injectable()
export class AuthDataService extends DefaultDataService<User> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super(userKey, http, httpUrlGenerator);
  }

  override getAll(): Observable<User[]> {
    return this.http.get<User[]>('/api/v1/users');
  }

  override getById(key: string | number): Observable<User> {
    return this.http.get<User>(`/api/v1/users/${key}`);
  }
}
