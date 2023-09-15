import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PhotosActions from './photo.actions';
import { EMPTY, catchError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UnsplashService } from '../services/unsplash.service';
import { Photo } from '../interfaces/photo.interface';

@Injectable()
export class PhotosEffects {
  trySearchPhotosAction = createEffect(() =>
    this.actions$.pipe(
      ofType(PhotosActions.trySearchPhotosAction),
      switchMap(({ query }) => {
        return this.unsplashService.searchPhotos(query).pipe(
          map((photos: Photo[]) =>
            PhotosActions.searchPhotosSuccessAction({ photos })
          ),
          catchError((err) => {
            console.error(err);
            return EMPTY;
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private unsplashService: UnsplashService
  ) {}
}
