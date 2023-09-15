import { createAction, props } from '@ngrx/store';
import { Photo } from '../interfaces/photo.interface';

export const trySearchPhotosAction = createAction(
  '[photos] try search photo',
  props<{ query: string }>()
);
export const searchPhotosSuccessAction = createAction(
  '[photos] search photo success',
  props<{ photos: Photo[] }>()
);

export const loadPhotosAction = createAction('[photos] load photos');
