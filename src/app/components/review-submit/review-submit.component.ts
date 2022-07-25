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
    public review: ReviewComponent) { }

  ngOnInit(): void {
  }

  submitReview() {
  }
}
