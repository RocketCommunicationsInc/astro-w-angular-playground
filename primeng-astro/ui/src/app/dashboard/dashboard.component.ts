import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Store, select } from '@ngrx/store';

import { logout, selectUserState } from '../auth/state';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './dashboard.component.html',
  styles: [],
})
export class DashboardComponent {
  user$ = this.store.pipe(select(selectUserState));

  constructor(private store: Store) {}

  logout() {
    this.store.dispatch(logout());
  }
}
