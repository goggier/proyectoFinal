import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('debe retornar formulario invalido', () =>{
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.componentInstance;
    fixture.detectChanges();
    
    const username = login.formulario.controls['username'];
    username.setValue('goggier');
    expect(login.formulario.invalid).toBeTrue();
  })

  it('debe retornar formulario valido', () =>{
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.componentInstance;
    fixture.detectChanges();
    
    let username = login.formulario.controls['username'];
    let password = login.formulario.controls['password'];
    username.setValue('goggier');
    password.setValue('kjasbkjabj');
    expect(login.formulario.invalid).toBeFalse();
  })

});
