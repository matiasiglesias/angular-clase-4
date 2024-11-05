import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SimpsonApiService } from '../simpson-api.service';
import { IFrase } from '../frase.model';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css',
})
export class PersonajeComponent implements OnInit {
  nombre?: string;
  frases: IFrase[] | undefined;

  constructor(private route: ActivatedRoute, private api: SimpsonApiService) {
    this.route.params.subscribe((params) => {
      this.nombre = params['nombre'];
    });
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.api.fetchDataFromPersonaje(this.nombre!).subscribe((data) => {
      console.log(data);
      this.frases = data;
    });
  }
}
