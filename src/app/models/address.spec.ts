<<<<<<< HEAD
// import { Address } from './address';
//
//
// describe('Address', () => {
//   it('should create an instance', () => {
//     const address = new Address(1,"fname", "lname", "add1", "add2", "hereinthe", "state", "55555", "USA");
//     expect(address).toBeTruthy();
//   });
// });
=======
import { Address } from './address';


describe('Address', () => {
  it('should create an instance', () => {

    expect(new Address(
	             "John",
	             "Doe",
	             "1234 Number Pl",
	             "Apt 2b",
	             "Phoenix",
	             "AZ",
	             "55555",
	             "USA"
)).toBeTruthy();

  });
});

>>>>>>> 4bd3e1d11cb57551743587ebe3fce235b03e43ab
