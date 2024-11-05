import { Component, OnInit } from '@angular/core';
import { IFrase } from '../frase.model';
import { SimpsonApiService } from '../simpson-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
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
