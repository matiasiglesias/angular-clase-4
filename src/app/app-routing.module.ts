import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajeComponent } from './personaje/personaje.component';
import { HomeComponent } from './home/home.component';
import { FraseResolver } from './frase.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'personaje/:nombre',
    component: PersonajeComponent,
    resolve: { frases: FraseResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
