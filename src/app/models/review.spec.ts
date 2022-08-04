import { Review } from "./review";

describe('Review', () => {
	
  it('should create a user with initialized fields', () => {
    let review = new Review( 1,1, 5,"title", "review");
    expect(review).toBeTruthy();
    
    

  });
})