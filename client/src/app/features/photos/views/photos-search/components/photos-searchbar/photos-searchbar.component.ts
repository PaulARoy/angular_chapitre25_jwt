import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  `,
  styleUrls: ['./photos-searchbar.component.scss'],
})
export class PhotosSearchbarComponent {
  @Input() public inputQuery!: string;
  @Output() public search: EventEmitter<string> = new EventEmitter();
}
