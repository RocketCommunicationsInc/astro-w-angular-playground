import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { PostsService } from './services';
import { RouterLink } from '@angular/router';
import { Path } from '../shared';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterLink, PanelModule, ButtonModule, CardModule],
  templateUrl: './posts.component.html',
  styles: [
    `
      :host {
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: auto;
        gap: 8px;
      }
    `,
  ],
})
export class PostsComponent {
  posts$ = this.postsService.entities$;
  postsPath = '/' + Path.posts;

  constructor(private postsService: PostsService) {}
}
