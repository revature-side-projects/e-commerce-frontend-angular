import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  reviewsUrl: string = `${environment.baseUrl}/api/review`;

  constructor(private http: HttpClient) { }

  // Get a list of all reviews for all products
  getAllReviews() {
    return this.http.get(this.reviewsUrl, { headers: environment.headers });
  }

  // Get a list of reviews related to a product with the given product ID
  getProductReviews(productId: number) {
    return this.http.get(`${this.reviewsUrl}/product/${productId}`, { headers: environment.headers });
  }

  // Get a list of reviews written by the user with the given user ID
  getUsersReviews(userId: number) {
    return this.http.get(`${this.reviewsUrl}/user/${userId}`, { headers: environment.headers });
  }

  // Get a specific review by its ID
  getReviewById(id: number) {
    return this.http.get(`${this.reviewsUrl}/${id}`, { headers: environment.headers });
  }

}
