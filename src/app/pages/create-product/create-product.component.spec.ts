import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductComponent } from './create-product.component';
import {ProductService} from 'src/app/services/product.service';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AuthService} from "@auth0/auth0-angular";
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('CreateProductComponent', () => {
  let component: CreateProductComponent;
  let fixture: ComponentFixture<CreateProductComponent>;
  let router:RouterTestingModule;
  let httpClient: HttpClientTestingModule;
    
  const productServiceSpy = jasmine.createSpyObj<ProductService>(['getProducts']);
  //ignore ngOnInit authentication
  CreateProductComponent.prototype.ngOnInit = () => {};
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateProductComponent],
      providers: [
	      {provide: ProductService, useValue: productServiceSpy},
	      {provide: Router, useValue: router},
	      {provide: HttpClient, useValue: httpClient},
	      {provide: AuthService, useValue:true}
	  ],
	  schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
