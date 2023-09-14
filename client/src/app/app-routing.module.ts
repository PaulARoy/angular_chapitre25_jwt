import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent } from './views/profil/profil.component';
import { authGuard } from './shared/guards/auth.guard';
import { dataUserGuard } from './shared/guards/data-user.guard';
import { HomeComponent } from './views/home/home.component';
import { ConnexionComponent } from './views/connexion/connexion.component';
import { InscriptionComponent } from './views/inscription/inscription.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [dataUserGuard],
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'connexion',
        component: ConnexionComponent,
      },
      {
        path: 'inscription',
        component: InscriptionComponent,
      },
      {
        path: 'profil',
        canActivate: [authGuard],
        component: ProfilComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
