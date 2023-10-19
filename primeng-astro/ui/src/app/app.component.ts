import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from './app.reducer';
import { login } from './auth/state';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) {
    this.store.subscribe((state) => {
      console.log(new Date().toISOString(), '[APP STATE]:', state);
    });
  }

  ngOnInit(): void {
    const userProfile = localStorage.getItem('user');

    if (userProfile) {
      this.store.dispatch(login({ payload: JSON.parse(userProfile) }));
    }
  }
}
