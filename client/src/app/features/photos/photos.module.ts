import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosSearchComponent } from './views/photos-search/photos-search.component';
import { LayoutModule } from 'src/app/shared/modules/layout.module';
import { RouterModule } from '@angular/router';
import { PHOTOS_ROUTES } from './photos.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { PhotosListComponent } from './views/photos-search/components/photos-list/photos-list.component';
import { PhotosSearchbarComponent } from './views/photos-search/components/photos-searchbar/photos-searchbar.component';
import { photosReducer, photosReducerKey } from './shared/store/photo.reducers';
import { PhotosEffects } from './shared/store/photo.effects';

@NgModule({
  declarations: [
    PhotosSearchComponent,
    PhotosListComponent,
    PhotosSearchbarComponent,
  ],
  imports: [
    LayoutModule,
    FormsModule,
    RouterModule.forChild(PHOTOS_ROUTES),
    StoreModule.forFeature(photosReducerKey, photosReducer),
    EffectsModule.forFeature([PhotosEffects]),
  ],
})
export class PhotosModule {}
