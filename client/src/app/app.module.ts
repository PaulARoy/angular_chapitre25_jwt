import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './shared/modules/layout.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilComponent } from './views/profil/profil.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ConnexionComponent } from './views/connexion/connexion.component';
import { HomeComponent } from './views/home/home.component';
import { InscriptionComponent } from './views/inscription/inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ConnexionComponent,
    InscriptionComponent,
    ProfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
