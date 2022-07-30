

export class Review {
  id: number;
  stars: number;
  starsUnchecked: number;
  title: string;
  review: string;
  posted: string;
  updated: string;
  user: any;
  product: any;
  

  constructor(
    id: number,
    stars: number,
    starsUnchecked: number,
    title: string,
    review: string,
    posted: string,
    updated: string,
    user: any,
    product: any,
   ) 
  {
	
	this.id = id;
	this.stars = stars;
	this.starsUnchecked = starsUnchecked;
	this.title = title;
	this.review = review;
	this.posted = posted;
	this.updated = updated;
	this.user = user;
	this.product = product;
	
  }
}