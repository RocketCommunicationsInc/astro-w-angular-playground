import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Store, select } from '@ngrx/store';

import { logout, selectUserState } from '../auth/state';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule, TabViewModule, PanelModule],
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
