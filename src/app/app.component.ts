import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IFrase } from './frase.model';
import { map, timeout } from 'rxjs';
import { SimpsonApiService } from './simpson-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HttpClient],
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  frases: IFrase[] | undefined;
  cantidad: number = 4;

  constructor(private api: SimpsonApiService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.api.fetchData(this.cantidad).subscribe((data) => {
      this.frases = data;
    });
  }
}
