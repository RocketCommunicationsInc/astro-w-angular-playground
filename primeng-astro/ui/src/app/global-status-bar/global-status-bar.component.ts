import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { Store, select } from '@ngrx/store';
import { logout, selectUserState } from '../auth/state';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'app-global-status-bar',
  standalone: true,
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    MenuModule,
    OverlayPanelModule,
  ],
  templateUrl: './global-status-bar.component.html',
  styles: [
    `
      h1,
      h2 {
        margin: 0;
      }
    `,
  ],
})
export class GlobalStatusBarComponent {
  user$ = this.store.pipe(select(selectUserState));

  logout() {
    this.store.dispatch(logout());
  }

  constructor(private store: Store) {}

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Light Mode',
        icon: 'pi pi-light',
        command(event) {
          console.log(event);
        },
      },
      {
        label: 'Logout',
        icon: 'pi pi-logout',
      },
    ];
  }
}
