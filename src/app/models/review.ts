<<<<<<< HEAD

export class Review {
  userId: number;
  productId: number;
  stars: number;
  title: string;
  review: string;

  constructor(
    userId: number,
    productId: number,
    stars: number,
    title: string,
    review: string
=======
import { Product } from './product';
import { User } from './user';

export class Review {
  userId:number;
  productId:number;
  stars:number;
  title:string;
  review:string;

  constructor(
    userId:number,
    productId:number,
    stars:number,
    title:string,
    review:string
>>>>>>> 2e54ea399a0e8c79266775e03e9a56e155d5a0fa
  ) {
    this.userId = userId;
    this.productId = productId;
    this.stars = stars;
    this.title = title;
    this.review = review;
<<<<<<< HEAD

=======
>>>>>>> 2e54ea399a0e8c79266775e03e9a56e155d5a0fa
  }
}
