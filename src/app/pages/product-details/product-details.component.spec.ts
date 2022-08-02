import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AuthService} from "@auth0/auth0-angular";
import { ProductDetailsComponent } from './product-details.component';
import {ProductService} from 'src/app/services/product.service';
import {ReviewService} from 'src/app/services/review.service';
import {of} from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {fakeAsync, tick} from '@angular/core/testing';
describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let productService: ProductService;
  let reviewService: ReviewService;
  
  const authServiceSpy = jasmine.createSpyObj(AuthService, ['']);
  //set the prototype ngOnit to function that does nothing to ignore ngOnitAuth issues
  
  ProductDetailsComponent.prototype.ngOnInit = () => {};
  
  beforeEach(async () => {
	const productServiceSpy = jasmine.createSpyObj(ProductService, ['getCart']);
	const reviewServiceSpy = jasmine.createSpyObj(ReviewService, ['getAllReviews']);
	productServiceSpy.getCart.and.returnValue(of());
	reviewServiceSpy.getAllReviews.and.returnValue(of());
		
    await TestBed.configureTestingModule({

      declarations: [ ProductDetailsComponent ],
      providers: [
		{provide: ProductService, useValue: productServiceSpy},
		{provide: ReviewService, useValue: reviewServiceSpy},
		{provide: AuthService, useValue:authServiceSpy},
       ],
       schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    productService = TestBed.inject(ProductService);
    reviewService = TestBed.inject(ReviewService);
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
 
  
})
	
	
	
  

