import { filter } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';

import { AppState } from './app.state';
import { login } from './auth/state';
import { SideNavComponent } from './side-nav/side-nav.component';
import { selectActivatedRouteSnapshotRoot, selectUrl } from './route.state';
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
    BreadcrumbModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  url$ = this.store.pipe(select(selectUrl));
  root: any;
  activatedRoute$ = this.store
    .select(selectActivatedRouteSnapshotRoot)
    .subscribe((result) => {
      return (this.root = result);
    });
  login = '/' + Path.login;
  menuItems: MenuItem[] | undefined;
  home: MenuItem = { routerLink: '/' + Path.dashboard, icon: 'pi pi-home' };

  private createBreadcrumbs(
    route: { children: any },
    routerLink: string = '',
    breadcrumbs: MenuItem[] = [],
  ): any {
    const children: any = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.url
        .map((segment: { path: 'string' }) => segment.path)
        .join('/');
      if (routeURL !== '' || undefined) {
        routerLink += `/${routeURL}`;

        const label = child.data['breadcrumb'];
        if (label) {
          breadcrumbs.push({ label, routerLink });
        }
      }

      return this.createBreadcrumbs(child, routerLink, breadcrumbs);
    }
  }

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    const userProfile = localStorage.getItem('user');

    if (userProfile) {
      this.store.dispatch(login({ payload: JSON.parse(userProfile) }));
    }

    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(({ url }) => {
        if (url === this.login) return;
        this.menuItems = this.createBreadcrumbs(this.root);
        // set the last breadcrumb to not be a link
        this.menuItems![this.menuItems!.length - 1].routerLink = undefined;
        return this.menuItems;
      });
  }
}
