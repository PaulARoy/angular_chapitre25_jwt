import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PhotosState, photosReducerKey } from './photo.reducers';

export const selectPhotosFeature =
  createFeatureSelector<PhotosState>(photosReducerKey);

export const selectPhotoList = createSelector(
  selectPhotosFeature,
  (photoState: PhotosState) => photoState.photos
);
