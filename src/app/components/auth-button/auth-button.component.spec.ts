import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AuthService} from '@auth0/auth0-angular';


import { AuthButtonComponent } from './auth-button.component';
import {of} from 'rxjs';

describe('AuthButtonComponent', () => {
  let component: AuthButtonComponent;
  let fixture: ComponentFixture<AuthButtonComponent>;
  let authService: AuthService;
  
  let authServiceSpy = jasmine.createSpyObj<AuthService>(['getUser'])
  authServiceSpy.getUser.and.returnValue(of([]));
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthButtonComponent],
      providers: [{provide: AuthService, useValue:authServiceSpy}]
    }).compileComponents();
    
    
    
    fixture = TestBed.createComponent(AuthButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  
   
  
});
