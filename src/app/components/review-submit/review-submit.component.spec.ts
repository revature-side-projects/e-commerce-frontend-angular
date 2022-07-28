import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSubmitComponent } from './review-submit.component';
import {AuthenticationService} from 'src/app/services/authentication.service';
import {ReviewService} from 'src/app/services/review.service';
import {of} from 'rxjs';

describe('ReviewSubmitComponent', () => {
  let component: ReviewSubmitComponent;
  let fixture: ComponentFixture<ReviewSubmitComponent>;

  beforeEach(async () => {
	const authServiceSpy = jasmine.createSpyObj(AuthenticationService, ['logout']);
	authServiceSpy.logout.and.returnValue(of());
	const reviewServiceSpy = jasmine.createSpyObj(ReviewService,['getAllReviews']);
	reviewServiceSpy.getAllReviews.and.returnValue(of());
	
    await TestBed.configureTestingModule({

      declarations: [ ReviewSubmitComponent ],
      providers: [
		  {provide: AuthenticationService, useValue: authServiceSpy},
		  {provide: ReviewService, useValue: reviewServiceSpy}
       ]
    })
    .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
