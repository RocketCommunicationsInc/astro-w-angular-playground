import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { AppState } from './app.state';
import { login } from './auth/state';
import { SideNavComponent } from './side-nav/side-nav.component';
import { selectUrl } from './route.state';
import { Path } from './shared';
import { GlobalStatusBarComponent } from './global-status-bar/global-status-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SideNavComponent,
    GlobalStatusBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  url$ = this.store.pipe(select(selectUrl));
  login = '/' + Path.login;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    const userProfile = localStorage.getItem('user');

    if (userProfile) {
      this.store.dispatch(login({ payload: JSON.parse(userProfile) }));
    }
  }
}
