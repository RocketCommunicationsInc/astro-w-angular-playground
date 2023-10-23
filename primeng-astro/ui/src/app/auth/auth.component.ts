import { noop, tap } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';

import { login } from './state';
import { AuthService } from './auth.service';
import { Path } from '../shared';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './auth.component.html',
  styles: [],
})
export class AuthComponent implements OnInit {
  users$ = this.authService.entities$;

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
  }

  navigateToDashboard() {
    this.router.navigateByUrl('/' + Path.dashboard);
  }

  login() {
    this.authService
      .getByKey(3)
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
