import { TestBed } from '@angular/core/testing';

import { PurchaseService } from './purchase.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('PurchaseService', () => {
  let service: PurchaseService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
	  imports: [HttpClientTestingModule],
	  providers: [PurchaseService,]
    });
    service = TestBed.inject(PurchaseService);
    httpMock = TestBed.inject(HttpTestingController);
    
  });

  afterEach(() => {
	httpMock.verify();
  })
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  
 describe('getAllPurchase', () => {
		const dummyUser = {
			email: 'email', firstName: 'Bob', lastName: 'Roberts', password: 'password', role: 'user', purchases: [], reviews: [], addresses: [],
		}
		const dummyPurchases = [
			{ 
			id: 1,
  			orderPlaced: "now",
            product: {id: 1, name:"revsauce", quantity: 1, price: 2.50, description: "best ever", image: "someImg"},
            ownerUser: dummyUser
			},

			{
			id: 2,
  			orderPlaced: "now",
            product: {id: 1, name:"revsauce", quantity: 1, price: 2.50, description: "best ever", image: "someImg"},
            ownerUser: dummyUser
			},
			{ 
			id: 3,
  			orderPlaced: "now",
            product: {id: 1, name:"revsauce", quantity: 1, price: 2.50, description: "best ever", image: "someImg"},
            ownerUser: dummyUser
			}
		];
	it('should return all expected purchases', ()=>{
	
		service.getAllPurchases().subscribe(purchases => {
			expect(purchases.length).toBe(3);
			expect(purchases).toEqual(dummyPurchases);
		})
		const purchaseUrl = service["purchaseUrl"];
		const request = httpMock.expectOne(`${purchaseUrl}`);
		expect(request.request.method).toBe('GET');
		request.flush(dummyPurchases)
	});
	



	
	describe('getUserPurchases', () => {
		it('should return purchases made by a single user', () => {
		  service.getUserPurchases(1).subscribe(purchases => {
			  expect(purchases.length).toBe(3);
			  expect(purchases).toEqual(dummyPurchases);
		  })
		  const request = httpMock.expectOne(`${service["purchaseUrl"]}/user/1`);
		  expect(request.request.method).toBe('GET');
		  request.flush(dummyPurchases); 
		})
	})
  })
});
