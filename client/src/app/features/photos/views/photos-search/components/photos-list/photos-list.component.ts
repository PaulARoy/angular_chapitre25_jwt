import { Component, Input } from '@angular/core';
import { Photo } from 'src/app/features/photos/shared/interfaces/photo.interface';

@Component({
  selector: 'app-photos-list',
  template: `
    <div class="container">
      <img *ngFor="let photo of photos" [src]="photo.url" />
    </div>
  `,
  styleUrls: ['./photos-list.component.scss'],
})
export class PhotosListComponent {
  @Input() public photos!: Photo[] | null;
}
