import { Component, Input } from '@angular/core';
import { IFrase } from '../frase.model';

@Component({
  selector: 'app-item-frase[frase]',
  templateUrl: './item-frase.component.html',
  styleUrl: './item-frase.component.css',
})
export class ItemFraseComponent {
  @Input() frase!: IFrase;
}
