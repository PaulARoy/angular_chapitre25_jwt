import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Photo } from 'src/app/features/photos/shared/interfaces/photo.interface';

@Component({
  selector: 'app-photos-list',
  template: `
    <div class="container" [@list]="photos?.length">
      <img *ngFor="let photo of photos" [src]="photo.url" />
    </div>
  `,
  styleUrls: ['./photos-list.component.scss'],
  animations: [
    trigger('list', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'scale(1.2)' }),
            stagger(50, animate(400)),
          ],
          {
            optional: true,
          }
        ),
      ]),
    ]),
  ],
})
export class PhotosListComponent {
  @Input() public photos!: Photo[] | null;
}
