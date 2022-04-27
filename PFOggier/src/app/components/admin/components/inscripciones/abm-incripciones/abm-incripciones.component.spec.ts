import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmIncripcionesComponent } from './abm-incripciones.component';

describe('AbmIncripcionesComponent', () => {
  let component: AbmIncripcionesComponent;
  let fixture: ComponentFixture<AbmIncripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmIncripcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmIncripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
