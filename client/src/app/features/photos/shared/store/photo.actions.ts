import { createAction, props } from '@ngrx/store';
import { Photo } from '../interfaces/photo.interface';

export const trySearchPhotosAction = createAction('[photos] try search photo');
export const searchPhotosSuccessAction = createAction(
  '[photos] search photo success',
  props<{ photos: Photo[] }>()
);
