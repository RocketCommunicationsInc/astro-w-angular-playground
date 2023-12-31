import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { PhotosService } from './photos.service';
import { SkeletonModule } from 'primeng/skeleton';
import { map } from 'rxjs';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule, PanelModule, CardModule, SkeletonModule],
  templateUrl: './photos.component.html',
  styles: [
    `
      :host {
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: auto;
      }
    `,
  ],
})
export class PhotosComponent {
  photos$ = this.photosService.entities$.pipe(
    map((photos) => photos.slice(0, 25)),
  );
  loading$ = this.photosService.loading$;
  skeletons = Array(2).fill(2);

  constructor(private photosService: PhotosService) {}
}
