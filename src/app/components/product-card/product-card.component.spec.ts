import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
<<<<<<< HEAD
import { ProductService } from 'src/app/services/product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
=======
import {ProductService} from 'src/app/services/product.service';

import {NavbarComponent} from 'src/app/components/navbar/navbar.component';

import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';
>>>>>>> 4bd3e1d11cb57551743587ebe3fce235b03e43ab

import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import{CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';


fdescribe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
<<<<<<< HEAD
	 const productServiceSpy = jasmine.createSpyObj<ProductService>(['getCart']);


     await TestBed.configureTestingModule({

	  imports:[HttpClientTestingModule],
	  providers: [{ProductService, useValue: productServiceSpy}],
      declarations: [ ProductCardComponent ]
=======

	const productServiceSpy = jasmine.createSpyObj<ProductService>(['getCart']);
	productServiceSpy.getCart.and.returnValue(of());
	
    await TestBed.configureTestingModule({
      declarations: [ ProductCardComponent, NavbarComponent ],
      imports:[RouterTestingModule, FormsModule, ReactiveFormsModule],
      providers: [{provide: ProductService, useValue: productServiceSpy}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
      

>>>>>>> 4bd3e1d11cb57551743587ebe3fce235b03e43ab
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
<<<<<<< HEAD

=======
>>>>>>> 4bd3e1d11cb57551743587ebe3fce235b03e43ab
});
