import {Purchase} from './purchase';

describe('Purchase', () => {
	it('should create', () => {
		const product = {
			id: 1,
			name: "tshirt",
			quantity: 1,
			price: 2.50,
			description: "cool shirt",
			image: "some image"
		}
		
		const dummyUser = {email: 'email', firstName: 'Bob', lastName: 'Roberts', password: 'password', role: 'user', purchases: [], reviews: [], addresses: []};
		
		const purchase = new Purchase(1, "now", product, dummyUser, 1);
		
		expect(purchase).toBeTruthy();
	})
})
