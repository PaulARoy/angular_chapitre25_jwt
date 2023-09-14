import { Injectable, inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../store/auth.selectors';
import { tryFetchCurrentUserAction } from '../store/auth.actions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataUserGuard {
  constructor(private store: Store) {}

  canActivate(): Observable<true> {
    return this.store.select(selectCurrentUser).pipe(
      first(),
      map((user: User | null) => {
        if (!user) {
          this.store.dispatch(tryFetchCurrentUserAction());
        }

        return true;
      })
    );
  }
}
