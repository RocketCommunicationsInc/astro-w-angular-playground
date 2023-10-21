import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Path } from '../shared';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './side-nav.component.html',
  styles: [],
})
export class SideNavComponent {
  dashboard = '/' + Path.dashboard;
  posts = '/' + Path.posts;
  albums = '/' + Path.albums;
  photos = '/' + Path.photos;
  todos = '/' + Path.todos;
}
