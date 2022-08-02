import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {ReviewComponent} from 'src/app/components/review/review.component';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  reviewsUrl: string = `${environment.baseUrl}/api/review`;

  constructor(private http: HttpClient) { }

  // Get a list of all reviews for all products
  getAllReviews(): Observable<ReviewComponent[]> {
    return this.http.get<ReviewComponent[]>(this.reviewsUrl, { headers: environment.headers });
  }

  /**
   * Get a list of reviews related to a product with the given product ID
   * @param {number} productId 
   */
  getProductReviews(productId: number): Observable<ReviewComponent[]> {
    return this.http.get<ReviewComponent[]>(`${this.reviewsUrl}/product/${productId}`, {
      headers: environment.headers,
    });
  }

  /**
   * Get a list of reviews written by the user with the given user ID
   * @param {number} userId 
   * @returns 
   */
  getUsersReviews(userId: number): Observable<ReviewComponent[]> {
    return this.http.get<ReviewComponent[]>(`${this.reviewsUrl}/user/${userId}`, {
      headers: environment.headers,
    });
  }

  /**
   * Get a specific review by its ID
   * 
   * @param {number} id 
   * @returns 
   */
  getReviewById(id: number): Observable<ReviewComponent> {
    return this.http.get<ReviewComponent>(`${this.reviewsUrl}/${id}`, {
      headers: environment.headers,
    });
  }

  /**
   * 
   * @param {number} productId 
   * @param {number} stars 
   * @param {string} title 
   * @param {string} review 
   * @returns 
   */
  postReview(productId: number, stars: number, title: string, review: string): Observable<ReviewComponent> {
    if (stars > 5) {
      stars = 5;
    }
    const userReview = {
      userId: sessionStorage.getItem('userId'),
      productId: productId,
      stars: stars,
      title: title,
      review: review,
    };
    return this.http.post<ReviewComponent>(`${this.reviewsUrl}`, userReview, {
      headers: environment.headers,
    });
  }

  /**
   * 
   * @param {number} id 
   */
  deleteReviewById(id: number, userId: number): Observable<ReviewComponent> {
    //const userId = sessionStorage.getItem('userId');
    return this.http.delete<ReviewComponent>(`${this.reviewsUrl}/${userId}/${id}`, {
      headers: environment.headers,
    });
  }
}