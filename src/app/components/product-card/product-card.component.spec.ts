import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';

import {Router} from '@angular/router';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

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
  let productService: ProductService;
  
    //not testing ngOnInit auth services
    //so set ngOnInity to be empty function  
	
	
  beforeEach(async () => {
	const productServiceSpy = jasmine.createSpyObj<ProductService>(['getCart'])
	//productServiceSpy.getCart.and.returnValue(of());
	
	const routerSpy = jasmine.createSpyObj<RouterTestingModule>(['']);
	
	const authServiceSpy = jasmine.createSpyObj<AuthService>(['getUser']);
	authServiceSpy.getUser.and.returnValue(of());
	
    await TestBed.configureTestingModule({
     
      providers: [ProductCardComponent, AppComponent, 
         {provide: ProductService, useValue: productServiceSpy},
         {provide: Router, useValue: routerSpy},
         {provide: AuthService, useValue: authServiceSpy}
        
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    })
    .compileComponents();
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    productService = TestBed.inject(ProductService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
