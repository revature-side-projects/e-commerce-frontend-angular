import { Product } from './product';



describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product(
	     5, 
	     "testprod", 
	     2, 
	     "newDesc",
	     2.25,
	     ""
	     
     )).toBeTruthy();

  });
  
  
});

