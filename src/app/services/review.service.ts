import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  reviewsUrl: string = `${environment.baseUrl}/api/review`;

  constructor(private http: HttpClient) {}

  // Get a list of all reviews for all products
  getAllReviews() {
    return this.http.get(this.reviewsUrl, { headers: environment.headers });
  }

  // Get a list of reviews related to a product with the given product ID
  getProductReviews(productId: number) {
    return this.http.get(`${this.reviewsUrl}/product/${productId}`, {
      headers: environment.headers,
    });
  }

  // Get a list of reviews written by the user with the given user ID
  getUsersReviews(userId: number) {
    return this.http.get(`${this.reviewsUrl}/user/${userId}`, {
      headers: environment.headers,
    });
  }

  // Get a specific review by its ID
  getReviewById(id: number) {
    return this.http.get(`${this.reviewsUrl}/${id}`, {
      headers: environment.headers,
    });
  }

  postReview(productId: number, stars: number, title: string, review: string) {
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
    return this.http.post(`${this.reviewsUrl}`, userReview, {
      headers: environment.headers,
    });
  }

  deleteReviewById(id: number) {
    const userId = sessionStorage.getItem('userId');
    return this.http.delete(`${this.reviewsUrl}/${userId}/${id}`, {
      headers: environment.headers,
    });
  }
}
