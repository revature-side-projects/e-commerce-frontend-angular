import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProductsComponent } from './display-products.component';
<<<<<<< HEAD:src/app/pages/display-products/display-products.component.spec.ts
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
=======

import {RouterTestingModule} from '@angular/router/testing';
import {ProductService} from 'src/app/services/product.service';
import {of} from 'rxjs';

>>>>>>> 4bd3e1d11cb57551743587ebe3fce235b03e43ab:src/app/components/display-products/display-products.component.spec.ts

describe('DisplayProductsComponent', () => {
  let component: DisplayProductsComponent;
  let fixture: ComponentFixture<DisplayProductsComponent>;

  beforeEach(async () => {
	const productServiceSpy = jasmine.createSpyObj<ProductService>(['getProducts']);
	productServiceSpy.getProducts.and.returnValue(of());
	
    await TestBed.configureTestingModule({
<<<<<<< HEAD:src/app/pages/display-products/display-products.component.spec.ts
      imports: [HttpClientTestingModule],
      declarations: [DisplayProductsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
=======

      declarations: [ DisplayProductsComponent ],
      imports: [RouterTestingModule],
      providers: [{provide: ProductService, useValue: productServiceSpy}]

    })
    .compileComponents();
>>>>>>> 4bd3e1d11cb57551743587ebe3fce235b03e43ab:src/app/components/display-products/display-products.component.spec.ts
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
