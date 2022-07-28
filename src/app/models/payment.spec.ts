import { Payment } from './payment';


describe('Payment', () => {
  it('should create an instance', () => {
<<<<<<< HEAD
    expect(new Payment("pymt", "details")).toBeTruthy();
=======
	const p = new Payment("payment", "details")
    expect(p).toBeTruthy();
>>>>>>> f696cb742ec14f1179900fe7ea26ca300a465a02
  });
});
