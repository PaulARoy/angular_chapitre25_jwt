import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class PhotosEffects {
  constructor(private actions$: Actions) {}
}
