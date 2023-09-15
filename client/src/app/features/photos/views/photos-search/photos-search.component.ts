import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Photo } from '../../shared/interfaces/photo.interface';
import { selectPhotoList } from '../../shared/store/photo.selectors';
import { trySearchPhotosAction } from '../../shared/store/photo.actions';

@Component({
  selector: 'app-photos-search',
  templateUrl: './photos-search.component.html',
  styleUrls: ['./photos-search.component.scss'],
})
export class PhotosSearchComponent {
  public photos$: Observable<Photo[]> = this.store.select(selectPhotoList);

  constructor(private store: Store) {}

  public searchPhoto(query: string) {
    this.store.dispatch(trySearchPhotosAction({ query }));
  }
}
