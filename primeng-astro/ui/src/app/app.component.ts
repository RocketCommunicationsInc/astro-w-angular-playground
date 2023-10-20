import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { AppState } from './app.state';
import { login } from './auth/state';
import { selectUrl } from './route.state';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) {
    this.store.pipe(select(selectUrl)).subscribe((url) => {
      console.log(url);
    });
  }

  ngOnInit(): void {
    const userProfile = localStorage.getItem('user');

    if (userProfile) {
      this.store.dispatch(login({ payload: JSON.parse(userProfile) }));
    }
  }
}
