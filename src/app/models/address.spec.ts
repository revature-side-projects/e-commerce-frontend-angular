import { Address } from './address';


describe('Address', () => {
  it('should create an instance and initialize fields', () => {
  const address = new Address("add1", "add2", "city", "state", "12345", []);     
  expect(address).toBeTruthy();  
 
  });
});


