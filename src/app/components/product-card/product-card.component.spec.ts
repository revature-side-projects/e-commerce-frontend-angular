import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';


import {Router} from '@angular/router';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';


import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ProductService} from 'src/app/services/product.service';

import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { AppComponent } from 'src/app/app.component';



xdescribe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  
  let appComponent: AppComponent;
  let router: RouterTestingModule;
 
  
 
  beforeEach(async () => {
	const productServiceSpy = jasmine.createSpyObj<ProductService>(['getCart'])
	productServiceSpy.getCart.and.returnValue(of());
	
	const routerSpy = jasmine.createSpyObj<RouterTestingModule>(['']);
	
	const authServiceSpy = jasmine.createSpyObj<AuthService>(['getUser']);
	authServiceSpy.getUser.and.returnValue(of());
	
    await TestBed.configureTestingModule({
     
      providers: [ProductCardComponent, AppComponent, 
         {provide: ProductService, useValue: productServiceSpy},
         {provide: Router, useValue: routerSpy},
        
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    })
    .compileComponents();
    
    
    appComponent = TestBed.inject(AppComponent);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
