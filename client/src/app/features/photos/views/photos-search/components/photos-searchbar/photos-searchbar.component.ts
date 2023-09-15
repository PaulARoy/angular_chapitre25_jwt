import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-photos-searchbar',
  templateUrl: './photos-searchbar.component.html',
  styleUrls: ['./photos-searchbar.component.scss'],
})
export class PhotosSearchbarComponent {
  @Input() public inputQuery!: string;
  @Output() public search: EventEmitter<string> = new EventEmitter();
}
