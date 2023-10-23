import { noop, tap } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { ListboxChangeEvent, ListboxModule } from 'primeng/listbox';

import { login } from './state';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ButtonModule, ListboxModule],
  templateUrl: './auth.component.html',
  styles: [
    `
      :host {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  users$ = this.authService.entities$;
  userId = 0;

  constructor(private authService: AuthService, private store: Store) {}

  onChange(e: ListboxChangeEvent) {
    this.userId = e.value;
  }

  login() {
    this.authService
      .getByKey(this.userId)
      .pipe(tap((user) => this.store.dispatch(login({ payload: user }))))
      .subscribe({
        next: noop,
        error: (err) => console.warn(err.message),
      });
  }
}
