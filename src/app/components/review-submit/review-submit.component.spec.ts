import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSubmitComponent } from './review-submit.component';
import {AuthService} from 'src/app/services/auth.service';
import {ReviewService} from 'src/app/services/review.service';
import {of} from 'rxjs';

describe('ReviewSubmitComponent', () => {
  let component: ReviewSubmitComponent;
  let fixture: ComponentFixture<ReviewSubmitComponent>;

  beforeEach(async () => {
	const authServiceSpy = jasmine.createSpyObj(AuthService, ['logout']);
	authServiceSpy.logout.and.returnValue(of());
	const reviewServiceSpy = jasmine.createSpyObj(ReviewService,['getAllReviews']);
	reviewServiceSpy.getAllReviews.and.returnValue(of());
	
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [ReviewSubmitComponent],
    }).compileComponents();
=======
      declarations: [ ReviewSubmitComponent ],
      providers: [
		  {provide: AuthService, useValue: authServiceSpy},
		  {provide: ReviewService, useValue: reviewServiceSpy}
       ]
    })
    .compileComponents();
>>>>>>> 4bd3e1d11cb57551743587ebe3fce235b03e43ab
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
