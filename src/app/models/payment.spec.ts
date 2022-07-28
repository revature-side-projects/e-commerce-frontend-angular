import { Payment } from './payment';

describe('Payment', () => {
  it('should create an instance', () => {
<<<<<<< HEAD
    const p = new Payment('payment', 'details');
    expect(p).toBeTruthy();
=======

    expect(new Payment("pymt", "details")).toBeTruthy();

>>>>>>> 4bd3e1d11cb57551743587ebe3fce235b03e43ab
  });
});
