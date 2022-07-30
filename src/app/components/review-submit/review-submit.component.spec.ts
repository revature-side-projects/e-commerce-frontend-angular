import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';


import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ReviewSubmitComponent } from './review-submit.component';
import {AuthService} from  '@auth0/auth0-angular';
import {ReviewService} from 'src/app/services/review.service';
import {of} from 'rxjs';

 
describe('ReviewSubmitComponent', () => {
  let component: ReviewSubmitComponent;
  let fixture: ComponentFixture<ReviewSubmitComponent>;


  beforeEach(async () => {
	const authServiceSpy = jasmine.createSpyObj(AuthService, ['logout']);
	authServiceSpy.logout.and.returnValue(of());
	const reviewServiceSpy = jasmine.createSpyObj(ReviewService,['postReview']);
	reviewServiceSpy.postReview.and.returnValue(of());
	
    await TestBed.configureTestingModule({

      declarations: [ ReviewSubmitComponent ],
      providers: [
		  {provide: AuthService, useValue: authServiceSpy},
		  {provide: ReviewService, useValue: reviewServiceSpy}
       ],
       schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
    

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
  

	
  });

  
  

