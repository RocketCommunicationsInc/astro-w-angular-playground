import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { Store, select } from '@ngrx/store';
import { BreadcrumbModule } from 'primeng/breadcrumb';

import { AppState } from './app.state';
import { login } from './auth/state';
import { SideNavComponent } from './side-nav/side-nav.component';
import { selectUrl } from './route.state';
import { Path } from './shared';
import { GlobalStatusBarComponent } from './global-status-bar/global-status-bar.component';
import { filter } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SideNavComponent,
    GlobalStatusBarComponent,
    BreadcrumbModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  url$ = this.store.pipe(select(selectUrl));
  login = '/' + Path.login;
  menuItems: MenuItem[] | undefined;
  home: MenuItem = { routerLink: '/', icon: 'pi pi-home' };

  private createBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: MenuItem[] = [],
  ): any {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url
        .map((segment) => segment.path)
        .join('/');
      if (routeURL !== '' || undefined) {
        url += `/${routeURL}`;

        const label = child.snapshot.data['breadcrumb'];
        if (label) {
          breadcrumbs.push({ label, url });
        }
      }

      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
  }

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const userProfile = localStorage.getItem('user');

    if (userProfile) {
      this.store.dispatch(login({ payload: JSON.parse(userProfile) }));
    }

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        return (this.menuItems = this.createBreadcrumbs(
          this.activatedRoute.root,
        ));
      });
  }
}
