import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
  @Input() reviewObj: any = {};

  id: number = 0;
  stars: number = 0;
  starsUnchecked: number = 0;
  title: string = '';
  review: string = '';
  posted: string = '';
  updated: string = '';
  user: any = {
    id: 0,
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };
  product: any = {
    id: 0,
    quantity: 0,
    price: 0.0,
    description: '',
    image: '',
    name: '',
  };

  constructor() {
    //Intentional(?)
   }

  ngOnInit(): void {
    this.id = this.reviewObj.id;
    this.stars = this.reviewObj.stars;
    this.starsUnchecked = 5 - this.stars;//out of 5 rating, for displaying correct amt of stars 
    this.title = this.reviewObj.title;
    this.review = this.reviewObj.review;
    let localDate = new Date(this.reviewObj.posted);//convert posted time from utc to machine's local time 
    this.posted = localDate.toLocaleString();
    this.updated = this.reviewObj.updated;
    this.user = this.reviewObj.user;
    this.product = this.reviewObj.product;
  }
}
