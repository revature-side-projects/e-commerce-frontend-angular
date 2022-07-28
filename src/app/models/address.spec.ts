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

