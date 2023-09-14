import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, first, map } from 'rxjs/operators';
import { selectIsLoggedIn } from '../store/auth.selectors';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private store: Store, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectIsLoggedIn).pipe(
      filter((x) => x !== null),
      first(),
      map((isLoggedin: boolean | null) => {
        if (!isLoggedin) {
          this.router.navigateByUrl('/connexion');
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
