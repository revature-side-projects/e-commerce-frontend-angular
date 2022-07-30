import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

import {Review} from 'src/app/models/review';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  reviewsUrl: string = `${environment.baseUrl}/api/review`;
  httpOptions = { 
	headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
}
  constructor(private http: HttpClient) {}

  // Get a list of all reviews for all products
  getAllReviews(): Observable<Review[]>{
    return this.http.get<Review[]>(this.reviewsUrl, this.httpOptions);
  }

  // Get a list of reviews related to a product with the given product ID
  getProductReviews(productId: number): Observable<Review> {
    return this.http.get<Review>(`${this.reviewsUrl}/product/${productId}`, this.httpOptions);
  }

  // Get a list of reviews written by the user with the given user ID
  getUsersReviews(userId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.reviewsUrl}/user/${userId}`, this.httpOptions);
  }

  // Get a specific review by its ID
  getReviewById(id: number): Observable<Review> {
    return this.http.get<Review>(`${this.reviewsUrl}/${id}`, this.httpOptions);
  }

  postReview(productId: number, stars: number, title: string, review: string): Observable<Review>  {
    if (stars > 5) {
      stars = 5;
    }

    const userReview = {
      productId: productId,
      stars: stars,
      title: title,
      review: review,
    };
    return this.http.post<Review>(`${this.reviewsUrl}`, userReview, {
      headers: environment.headers,
      withCredentials: environment.withCredentials,
    });
  }

  deleteReviewById(id: number): Observable<Review> {
    return this.http.delete<Review>(`${this.reviewsUrl}/${id}`, {
      headers: environment.headers,
      withCredentials: environment.withCredentials,
    });
  }
}
