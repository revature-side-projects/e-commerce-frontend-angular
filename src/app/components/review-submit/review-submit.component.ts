import { ReviewService } from '../../services/review.service';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-review-submit',
  templateUrl: './review-submit.component.html',
  styleUrls: ['./review-submit.component.css'],
})
export class ReviewSubmitComponent implements OnInit {
  @Input() productId: number = 0;
  @Input() isReviewed: boolean = false;

  stars: number = 0;
  title: string = '';
  review: string = '';

  constructor(public reviewService: ReviewService, public auth: AuthService) {}

  ngOnInit(): void {}

  submitReview() {
    console.log('submitting');
    this.reviewService
      .postReview(this.productId, this.stars, this.title, this.review)
      .subscribe(
        (response) => {
          this.isReviewed = true;
          console.log(response);
        },
        (error) => console.error()
      );
    document.getElementById('modal-close')?.click();
  }
}
