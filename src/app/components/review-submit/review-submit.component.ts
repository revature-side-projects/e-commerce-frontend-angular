import { ReviewService } from './../../services/review.service';
import { ReviewComponent } from './../review/review.component';
import { AuthService } from './../../services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-submit',
  templateUrl: './review-submit.component.html',
  styleUrls: ['./review-submit.component.css']
})
export class ReviewSubmitComponent implements OnInit {

  @Input() productId: number = 0;

  stars: number = 0;
  title: string = "";
  review: string = "";

  constructor(
    public authService: AuthService,
    public reviewService: ReviewService,
  ) { }

  ngOnInit(): void {
  }

  submitReview() {
    console.log("submitting")
    this.reviewService.postReview(this.productId, this.stars, this.title, this.review)
      .subscribe(
        response => console.log(response),
        error => console.error(error)
      );
    document.getElementById("modal-close")?.click();
  }
}
