import { noop, tap } from 'rxjs';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';

import { login } from './state';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './auth.component.html',
  styles: [],
})
export class AuthComponent {
  constructor(private authService: AuthService, private store: Store) {}

  login() {
    this.authService
      .fetchUser(7)
      .pipe(tap((user) => this.store.dispatch(login({ payload: user }))))
      .subscribe({
        next: noop,
        error: (err) => console.warn(err.message),
      });
  }
}
