import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductService } from 'src/app/services/product.service';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

import { CheckoutComponent } from './checkout.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;
  let router : RouterTestingModule;
  const productServiceSpy = jasmine.createSpyObj<ProductService>(['getProducts']);
  CheckoutComponent.prototype.ngOnInit = () => {};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutComponent],
      providers: [
	     {provide: ProductService, useValue: productServiceSpy},
	     {provide: Router, useValue: router}
       ],
       schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});