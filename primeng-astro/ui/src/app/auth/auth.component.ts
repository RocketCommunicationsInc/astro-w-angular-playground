import { noop, tap } from 'rxjs';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { ListboxChangeEvent, ListboxModule } from 'primeng/listbox';

import { login } from './state';
import { AuthService } from './auth.service';
import { Path } from '../shared';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ButtonModule, ListboxModule],
  templateUrl: './auth.component.html',
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        align-items: center;
      }

      .login-container {
        height: 31.125rem;
      }
    `,
  ],
})
export class AuthComponent {
  users$ = this.authService.entities$;
  userId = 0;
  isLoading = false;

  constructor(
    private authService: AuthService,
    private store: Store,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const userProfile = localStorage.getItem('user');

    if (userProfile) {
      this.navigateToDashboard();
    }

    this.authService.loading$.subscribe({
      next: (loading) => (this.isLoading = loading),
      error: (err) => console.log(err.message),
    });
  }

  navigateToDashboard() {
    this.router.navigateByUrl('/' + Path.dashboard);
  }

  onChange(e: ListboxChangeEvent) {
    this.userId = e.value;
  }

  login() {
    this.authService
      .getByKey(this.userId)
      .pipe(
        tap((user) => {
          this.store.dispatch(login({ payload: user }));
          this.navigateToDashboard();
        }),
      )
      .subscribe({
        next: noop,
        error: (err) => console.warn(err.message),
      });
  }
}
