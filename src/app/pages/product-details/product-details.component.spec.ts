import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';
import {ProductService} from 'src/app/services/product.service';
import {ReviewService} from 'src/app/services/review.service';
import {of} from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

xdescribe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
	const productServiceSpy = jasmine.createSpyObj(ProductService, ['getCart']);
	const reviewServiceSpy = jasmine.createSpyObj(ReviewService, ['getAllReviews']);
	productServiceSpy.getCart.and.returnValue(of());
	reviewServiceSpy.getAllReviews.and.returnValue(of());
		
    await TestBed.configureTestingModule({

      declarations: [ ProductDetailsComponent ],
      providers: [
		{provide: ProductService, useValue: productServiceSpy},
		{provide: ReviewService, useValue: reviewServiceSpy}
       ],
       schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    schemas : [CUSTOM_ELEMENTS_SCHEMA];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
