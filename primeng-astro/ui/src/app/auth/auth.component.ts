import { Observable, noop, tap } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';

import { User } from './auth.model';
import { login } from './state';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './auth.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  users$: Observable<User[]> = this.authService.entities$;

  constructor(private authService: AuthService, private store: Store) {}

  login() {
    this.authService
      .getByKey(3)
      .pipe(tap((user) => this.store.dispatch(login({ payload: user }))))
      .subscribe({
        next: noop,
        error: (err) => console.warn(err.message),
      });
  }
}
