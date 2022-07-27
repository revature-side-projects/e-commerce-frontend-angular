import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product(10,"p1", 5, "p1", 15, "")).toBeTruthy();
  });
  
  
});
//id: number, name: string, quantity: number, description: string, price: number, image: string): Product
