import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Identificacao } from './identificacao';

describe('Identificacao', () => {
  let component: Identificacao;
  let fixture: ComponentFixture<Identificacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Identificacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Identificacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
