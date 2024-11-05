import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ItemFraseComponent } from './item-frase/item-frase.component';
import { FormsModule } from '@angular/forms';
import { PersonajeComponent } from './personaje/personaje.component';
import { HomeComponent } from './home/home.component';
import { ActivatedRouteSnapshot, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ItemFraseComponent,
    PersonajeComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [HttpClientModule, RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
