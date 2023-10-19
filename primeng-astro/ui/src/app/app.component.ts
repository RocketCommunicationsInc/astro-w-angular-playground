import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    ButtonModule,
    CardModule,
    TabViewModule,
    PanelModule,
  ],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  constructor(private http: HttpClient) {
    this.http.get('/api/v1/posts').subscribe(console.log);
  }
}
