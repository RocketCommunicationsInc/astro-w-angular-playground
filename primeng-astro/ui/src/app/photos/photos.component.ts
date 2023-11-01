import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule, PanelModule, CardModule],
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
  photos$ = this.photosService.entities$;

  constructor(private photosService: PhotosService) {}
}
