import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-global-status-bar',
  standalone: true,
  imports: [CommonModule, ToolbarModule, ButtonModule, MenuModule],
  templateUrl: './global-status-bar.component.html',
  styleUrls: ['./global-status-bar.component.css'],
})
export class GlobalStatusBarComponent {
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
      { label: 'Logout', icon: 'pi pi-logout' },
    ];
  }
}
