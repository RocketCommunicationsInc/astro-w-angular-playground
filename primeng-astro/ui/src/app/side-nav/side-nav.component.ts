import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Path } from '../shared';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api/';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, MenuModule],
  templateUrl: './side-nav.component.html',
  styles: [],
})
export class SideNavComponent {
  dashboard = '/' + Path.dashboard;
  posts = '/' + Path.posts;
  albums = '/' + Path.albums;
  photos = '/' + Path.photos;
  todos = '/' + Path.todos;
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
        routerLink: '/' + Path.dashboard,
      },
      {
        label: 'Posts',
        icon: 'pi pi-fw pi-file',
        routerLink: '/' + Path.posts,
      },
      {
        label: 'Albums',
        icon: 'pi pi-fw pi-folder',
        routerLink: '/' + Path.albums,
      },
      {
        label: 'Photos',
        icon: 'pi pi-fw pi-images',
        routerLink: '/' + Path.photos,
      },
      {
        label: 'Todos',
        icon: 'pi pi-fw pi-list',
        routerLink: '/' + Path.todos,
      },
    ];
  }
}
