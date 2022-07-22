import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  id: number = 0;
  stars: number = 0;
  title: string = "";
  review: string = "";
  posted: string = "";
  updated: string = "";
  userId: any = {
    id: 0,
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };
  productId: any = {
    id: 0,
    quantity: 0,
    price: 0.0,
    description: "",
    image: "",
    name: ""
  };

  constructor() { }

  ngOnInit(): void {
  }
}
