import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import {ProductService} from 'src/app/services/product.service';

import {NavbarComponent} from 'src/app/components/navbar/navbar.component';

import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';

import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import{CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';


describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {

	const productServiceSpy = jasmine.createSpyObj<ProductService>(['getCart']);
	productServiceSpy.getCart.and.returnValue(of());
	
    await TestBed.configureTestingModule({
      declarations: [ ProductCardComponent, NavbarComponent ],
      imports:[RouterTestingModule, FormsModule, ReactiveFormsModule],
      providers: [{provide: ProductService, useValue: productServiceSpy}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
      

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
});
