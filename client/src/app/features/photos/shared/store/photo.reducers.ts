import { createReducer, on } from '@ngrx/store';
import { Photo } from '../interfaces/photo.interface';
import * as PhotosACtions from './photo.actions';

export interface PhotosState {
  photos: Photo[];
  loading: boolean;
}

const PHOTOS_INITIAL_STATE: PhotosState = {
  photos: [],
  loading: false,
};

export const photosReducerKey = '[reducer] photos';

export const photosReducer = createReducer(
  PHOTOS_INITIAL_STATE,
  on(
    PhotosACtions.searchPhotosSuccessAction,
    (state: PhotosState, { photos }: { photos: Photo[] }): PhotosState => {
      return { ...state, photos, loading: false };
    }
  )
);
