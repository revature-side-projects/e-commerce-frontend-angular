import { Address } from './address';


describe('Address', () => {
  it('should create an instance', () => {
	const address = new Address("fname", "lname", "add1", "add2", "hereinthe", "state", "55555", "USA");
    expect(address).toBeTruthy();
  });
});

