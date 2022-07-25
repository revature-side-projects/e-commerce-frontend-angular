import { ReviewService } from './../../services/review.service';
import { ReviewComponent } from './../review/review.component';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-submit',
  templateUrl: './review-submit.component.html',
  styleUrls: ['./review-submit.component.css']
})
export class ReviewSubmitComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public reviewService: ReviewService,
    public review: ReviewComponent) { }

  ngOnInit(): void {
  }

  submitReview() {
    this.reviewService.postReview(this.review.product.Id, this.review.stars, this.review.title, this.review.review)

    document.getElementById("modal-close")?.click();
  }
}
