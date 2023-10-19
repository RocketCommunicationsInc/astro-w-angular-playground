import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';

import { AuthComponent } from './auth/auth.component';
import { AppState } from './app.reducer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  constructor(private store: Store<AppState>) {
    this.store.subscribe((state) => {
      console.log(new Date().toISOString(), '[APP STATE]:', state);
    });
  }
}
