import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Router} from '@angular/router';
import { NavbarComponent } from './navbar.component';
import {AppComponent} from 'src/app/app.component'

import {ProductService} from 'src/app/services/product.service';
import { AuthService } from '@auth0/auth0-angular';

import {of} from 'rxjs';



describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  
  
  
  beforeEach(async () => {
	
    const productServiceSpy = jasmine.createSpyObj<ProductService>(['getCart']);
    productServiceSpy.getCart.and.returnValue(of());
    const appComponentSpy = jasmine.createSpyObj<AppComponent>(['isSearching']);
    appComponentSpy.isSearching.valueOf();
    const routerSpy = jasmine.createSpyObj<Router>(['dispose']);
    routerSpy.dispose.and.returnValue;
    const authServiceSpy = jasmine.createSpyObj<AuthService>(['getUser']);
    authServiceSpy.getUser.and.returnValue(of());
    
    await TestBed.configureTestingModule({
	 
	   declarations: [NavbarComponent],
	   providers:[
		{provide: ProductService, useValue: productServiceSpy},
		{provide: AppComponent, useValue: appComponentSpy},
		{provide: Router, useValue: routerSpy},
		{provide: AuthService, useValue: authServiceSpy}
		]       
     
    }).compileComponents();
    
      
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  

});
