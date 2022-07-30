import { TestBed } from '@angular/core/testing';

import { ReviewService } from './review.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('ReviewService', () => {
  let service: ReviewService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
	  imports:[HttpClientTestingModule],
	  providers: [ReviewService]
    });
    service = TestBed.inject(ReviewService);
    httpMock = TestBed.inject(HttpTestingController);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  describe('getAllReviews', () => {
	it('should return expected reviews when called', () =>{
		const dummyReviews = [
			{id: 1, stars: 5, title: "t1", review: "mediocre", posted:"", updated:"", user: null, product: null},
		    {id: 2, stars: 5, title: "t2", review: "mediocre", posted:"", updated:"", user: null, product: null},		
	        {id: 3, stars: 5, title: "t1", review: "mediocre", posted:"", updated:"", user: null, product: null},	
		]
		
		service.getAllReviews().subscribe(reviews => {
			expect(reviews.length).toBe(3);
			expect(reviews).toEqual(dummyReviews);
		})
		const request = httpMock.expectOne(`${service.reviewsUrl}`)
		})
		
	})
  })
  
  describe('getProductReviews', () => {
	it('should return expected reviews when called', () =>{
		
	})
  })
  
  describe('getUsersReviews', () => {
	
  })
  describe('getReviewById', () => {
	
  })
  
  describe('postReview', () => {
	
  })
  
  describe('deleteReviewById', () => {
	
  })
});
