import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AuthService} from '@auth0/auth0-angular';
import {fakeAsync, tick} from '@angular/core/testing';

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
    
    authService = TestBed.inject(AuthService);
    
    fixture = TestBed.createComponent(AuthButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  describe('login()', () => {
       it('it should be callable', () => {
	      spyOn(component, 'login');
	      component.login();
	      expect(component.login).toHaveBeenCalled();
       })
   })
   
  describe('logout()', () => {
	 it('it should be callable', () => {
		spyOn(component, 'logout');
		component.logout();
		expect(component.logout).toHaveBeenCalled();
	 })
  })
});
