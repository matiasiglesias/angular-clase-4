import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFraseComponent } from './item-frase.component';

describe('ItemFraseComponent', () => {
  let component: ItemFraseComponent;
  let fixture: ComponentFixture<ItemFraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemFraseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemFraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
