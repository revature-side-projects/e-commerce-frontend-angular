import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

import {AuthService} from 'src/app/services/auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
	const authServiceSpy = jasmine.createSpyObj<AuthService>(['login']);
	authServiceSpy.login.and.returnValue(of());
	
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],

      imports: [RouterTestingModule],
      providers: [{provide: AuthService, useValue: authServiceSpy}]  
      

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
});
