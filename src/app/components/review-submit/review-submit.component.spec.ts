import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';


import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ReviewSubmitComponent } from './review-submit.component';
import {AuthService} from  '@auth0/auth0-angular';
import {ReviewService} from 'src/app/services/review.service';
import {of} from 'rxjs';
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
 
describe('ReviewSubmitComponent', () => {
  let component: ReviewSubmitComponent;
  let fixture: ComponentFixture<ReviewSubmitComponent>;
  let router: RouterTestingModule;
  let reviewService: ReviewService;
  
  beforeEach(async () => {
	const authServiceSpy = jasmine.createSpyObj<AuthService>(['logout']);
	
	const reviewServiceSpy = jasmine.createSpyObj<ReviewService>(['getAllReviews']);

	
    await TestBed.configureTestingModule({

      declarations: [ ReviewSubmitComponent ],
      providers: [
		  {provide: AuthService, useValue: authServiceSpy},
		  {provide: ReviewService, useValue: reviewServiceSpy},
		  {provide: Router, useValue: router}
       ],
       schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
    reviewService = TestBed.inject(ReviewService);  

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewSubmitComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create and initialize fields', () => {
    expect(component).toBeTruthy();
    expect(component.productId).toEqual(0);
    expect(component.isReviewed).toEqual(false);
    expect(component.stars).toEqual(0);
    expect(component.title).toEqual('');
    expect(component.review).toEqual('');
  });
  
 
})
	
 

  
  

