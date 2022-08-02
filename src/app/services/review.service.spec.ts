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
        const dummyReviewComponent = [{ id:  1, stars: 3, starsUnchecked: 2, title: 'ok', review: '', posted: '', updated:'',
          user: { id: 1, email: '',password: '',firstName: 'bob', lastName: '',},
          product: { id: 1, quantity: 1, price: 2.0, description: 'tshirt', image: '', name: '',
        }
    }]
  
    let dummyReviews = [dummyReviewComponent];
     
     
     service.getAllReviews().subscribe(reviews => {
	    expect(reviews.length).toBe(1);
	    

     })  
     const request = httpMock.expectOne(`${service.reviewsUrl}`);
     expect(request.request.method).toBe('GET');
     request.flush(dummyReviews);


     
    })
  })
  
describe('getProductReviews', () => {
    it('should return expected reviews', () => {
        const dummyReviewComponent = [{ id:  1, stars: 3, starsUnchecked: 2, title: 'ok', review: '', posted: '', updated:'',
          user: { id: 1, email: '',password: '',firstName: 'bob', lastName: '',},
          product: { id: 1, quantity: 1, price: 2.0, description: 'tshirt', image: '', name: '',
        }
    }]
  
    let dummyReviews = [dummyReviewComponent];
     
     
     service.getProductReviews(1).subscribe(reviews => {
	    expect(reviews.length).toBe(1);
     })  
     
     const request = httpMock.expectOne(`${service.reviewsUrl}/product/1`);
     expect(request.request.method).toBe('GET');
     request.flush(dummyReviews);
    })
  })
 
describe('getUsersReviews', () => {
    it('should return expected reviews', () => {
        const dummyReviewComponent = [{ id:  1, stars: 3, starsUnchecked: 2, title: 'ok', review: '', posted: '', updated:'',
          user: { id: 1, email: '',password: '',firstName: 'bob', lastName: '',},
          product: { id: 1, quantity: 1, price: 2.0, description: 'tshirt', image: '', name: '',
        }
    }]
  
    let dummyReviews = [dummyReviewComponent];
     
     
     service.getUsersReviews(1).subscribe(() => {
	    
     })  
     
     const request = httpMock.expectOne(`${service.reviewsUrl}/user/1`);
     expect(request.request.method).toBe('GET');
     request.flush(dummyReviews);  
    })
  })
 
describe('getReviewById', () => {
    it('should return expected reviews', () => {
        const dummyReview = { id:  1, stars: 3, starsUnchecked: 2, title: 'ok', review: '', posted: '', updated:'',
          user: { id: 1, email: '',password: '',firstName: 'bob', lastName: '',},
          product: { id: 1, quantity: 1, price: 2.0, description: 'tshirt', image: '', name: '',
        }
    }
     service.getReviewById(1).subscribe(() => {

     })  
     
     const request = httpMock.expectOne(`${service.reviewsUrl}/1`);
     expect(request.request.method).toBe('GET');
     request.flush(dummyReview);


     
    })
  })
  
describe('postReviews', () => {
    it('should post and return expected review', () => {
        const dummyReviewComponent = [{ id:  1, stars: 3, starsUnchecked: 2, title: 'ok', review: '', posted: '', updated:'',
          user: { id: 1, email: '',password: '',firstName: 'bob', lastName: '',},
          product: { id: 1, quantity: 1, price: 2.0, description: 'tshirt', image: '', name: '',
        }
    }]
  
    let dummyReviews = [dummyReviewComponent];
     
     
     service.postReview(1,3, '','').subscribe(() => {})  
     
     const request = httpMock.expectOne(`${service.reviewsUrl}`);
     expect(request.request.method).toBe('POST');
     request.flush(dummyReviews);
     
    })
  })

describe('deleteReviewById', () => {
    it('should delete and return deleted review', () => {
        const dummyReviewComponent = [{ id:  1, stars: 3, starsUnchecked: 2, title: 'ok', review: '', posted: '', updated:'',
          user: { id: 1, email: '',password: '',firstName: 'bob', lastName: '',},
          product: { id: 1, quantity: 1, price: 2.0, description: 'tshirt', image: '', name: '',
        }
    }]
  
    let dummyReviews = [dummyReviewComponent];
     
     
     service.deleteReviewById(1,1).subscribe(() => {})  
     
     const request = httpMock.expectOne(`${service.reviewsUrl}/1/1`);
     expect(request.request.method).toBe('DELETE');
     request.flush(dummyReviews);
     
    })
  })  

  
})