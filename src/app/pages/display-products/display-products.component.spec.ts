import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../../app.component';
import { DisplayProductsComponent } from './display-products.component';
import { AuthService } from '@auth0/auth0-angular';
import { AuthenticationService } from '../../services/authentication.service';
import {RouterTestingModule} from '@angular/router/testing';
import {ProductService} from 'src/app/services/product.service';
import {of} from 'rxjs';
import {Router} from '@angular/router';
import { UserService } from '../../services/user.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('DisplayProductsComponent', () => {
  let component: DisplayProductsComponent;
  let fixture: ComponentFixture<DisplayProductsComponent>;
  let authenticationService: AuthenticationService;
  let appComponent: AppComponent;
  let router: RouterTestingModule;
  
  DisplayProductsComponent.prototype.ngOnInit = () => {};
  
  beforeEach(async () => {
	const productServiceSpy = jasmine.createSpyObj<ProductService>(['getProducts']);
	productServiceSpy.getProducts.and.returnValue(of());
	
	const authServiceSpy = jasmine.createSpyObj(AuthService, ['']);

    await TestBed.configureTestingModule({

      declarations: [ DisplayProductsComponent],
      
      providers: [{provide: ProductService, useValue: productServiceSpy},
                  {provide: AuthService, useValue: authServiceSpy},
                  {provide: UserService, useValue: jasmine.createSpyObj([''])},
                  {provide: AppComponent, useValue: jasmine.createSpyObj([''])},
                  {provide: Router, useValue: router}
                  
                  ],       
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
    
    authenticationService = TestBed.inject(AuthenticationService);
 
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
