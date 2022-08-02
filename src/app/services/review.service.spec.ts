import {async, inject, TestBed } from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';
import { ReviewService } from './review.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {of} from 'rxjs';

describe('ReviewService', () => {
  let service: ReviewService,
      httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
	  imports: [HttpClientTestingModule],
	  providers: [
		ReviewService
	  ]
    });
    service = TestBed.inject(ReviewService);
    httpMock = TestBed.inject(HttpTestingController);
    
  });
  
  afterEach(()=>{
	httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAllReviews', () => {
    it('should return expected reviews', () => {
        const dummyReviewComponent = [{
         id:  1,
        stars: 3,
        starsUnchecked: 2,
        title: 'ok',
        review: '',
        posted: '',
        updated:'',
        user: {
          id: 1,
          email: '',
          password: '',
          firstName: 'bob',
          lastName: '',
        },
        product:  {
          id: 1,
          quantity: 1,
          price: 2.0,
          description: 'tshirt',
          image: '',
          name: '',
        }
    }]
    /*
    
    */
    let dummyReviews = [dummyReviewComponent];
     
     
     service.getAllReviews().subscribe(reviews => {
	    expect(reviews.length).toBe(1);

     })  
     const request = httpMock.expectOne(`${service.reviewsUrl}`);
     expect(request.request.method).toBe('GET');
     request.flush(dummyReviews);


     
    })
  })
})