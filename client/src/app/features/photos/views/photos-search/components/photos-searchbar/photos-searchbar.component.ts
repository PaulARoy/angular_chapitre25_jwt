import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLoading } from 'src/app/features/photos/shared/store/photo.selectors';

@Component({
  selector: 'app-photos-searchbar',
  template: `
    <mat-card>
      <input
        type="text"
        [(ngModel)]="inputQuery"
        (input)="search.emit(inputQuery)"
      />
    </mat-card>
    <mat-progress-bar *ngIf="loading" [mode]="'indeterminate'" />
  `,
  styleUrls: ['./photos-searchbar.component.scss'],
})
export class PhotosSearchbarComponent {
  @Input() public loading!: boolean | null;
  @Input() public inputQuery!: string;
  @Output() public search: EventEmitter<string> = new EventEmitter();

  constructor() {}
}
