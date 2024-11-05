import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFrase } from '../frase.model';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css',
})
export class PersonajeComponent {
  nombre?: string;
  frases: IFrase[] | undefined;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(({ frases }) => {
      console.log('recibi', frases);
      this.frases = frases;
    });
  }
}
