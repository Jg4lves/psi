import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Insta } from './insta';

describe('Insta', () => {
  let component: Insta;
  let fixture: ComponentFixture<Insta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Insta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Insta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
