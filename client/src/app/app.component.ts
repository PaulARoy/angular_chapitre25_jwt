import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './shared/services/auth.service';
import { Store } from '@ngrx/store';
import { selectIsLoggedIn } from './shared/store/auth.selectors';
import { tryLogoutAction } from './shared/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isLoggedin$: Observable<boolean | null> =
    this.store.select(selectIsLoggedIn);

  public logout() {
    this.store.dispatch(tryLogoutAction());
  }

  constructor(private store: Store, private router: Router) {}
}
