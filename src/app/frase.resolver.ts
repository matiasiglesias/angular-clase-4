import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve,
  ResolveFn,
  Router,
} from '@angular/router';
import { IFrase } from './frase.model';
import { Injectable } from '@angular/core';
import { SimpsonApiService } from './simpson-api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FraseResolver implements Resolve<IFrase[]> {
  constructor(private router: Router, private api: SimpsonApiService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<IFrase[]> {
    const nombre = route.params['nombre'];
    console.log('estoy en el resolver y quiero buscar frases de ', nombre);

    // logica si hay error enviar a otra pantalla
    return this.api.fetchDataFromPersonaje(nombre!);
  }
}
