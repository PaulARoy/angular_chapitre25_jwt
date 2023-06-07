import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './auth/connexion/connexion.component';
import { InscriptionComponent } from './auth/inscription/inscription.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { authGuard } from './shared/guards/auth.guard';
import { dataUserGuard } from './shared/guards/data-user.guard';

const routes: Routes = [
  { path: '', canActivate: [dataUserGuard], component: HomeComponent },
  {
    path: 'connexion',
    canActivate: [dataUserGuard],
    component: ConnexionComponent,
  },
  {
    path: 'inscription',
    canActivate: [dataUserGuard],
    component: InscriptionComponent,
  },
  {
    path: 'profil',
    canActivate: [dataUserGuard, authGuard],
    component: ProfilComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
