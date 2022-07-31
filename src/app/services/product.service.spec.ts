import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';



describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;
  const dummyProducts = [ 
		   {
            id : 1,
			name: "tshirt",
			quantity: 1,
			description: "cool shirt",
			price: 2.50,
			image: "an image"
		    
		    },
            {
		    
			id : 2,
			name: "tshirt",
			quantity: 1,
			description: "cool shirt",
			price: 2.50,
			image: "an image"
		    
		     }		   
	   ];
	   
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
    

	
	  
       service = TestBed.inject(ProductService);
       httpMock = TestBed.inject(HttpTestingController);	



  });

  afterEach(() => {
	  httpMock.verify();
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getProducts', () => {
	   
	it('should return the expected products when called', () => {
	      service.getProducts().subscribe(products => {
		    expect(products).toEqual(dummyProducts);
		    
	      })
	 
     const request = httpMock.expectOne(`${service["productUrl"]}`);
     expect(request.request.method).toBe('GET');
     request.flush(dummyProducts);  
		
	});
    })
	describe('getSearchProducts', () => {
		it('should return the expected products when called', () => {
			service.getSearchProducts("tshirt").subscribe(products => {
				expect(products.length).toBe(2);
				expect(products).toEqual(dummyProducts);
			})
		
		     const request = httpMock.expectOne(`${service["productUrl"]}/partial-search/tshirt`);
             expect(request.request.method).toBe('GET');
             request.flush(dummyProducts);  	
		})
	    
	   
	})

	describe('getSingleProduct', () => {
		const dummyProduct = { id : 1, name: "tshirt", quantity: 1, description: "cool shirt", price: 2.50, image: "an image"};

		it('should return the expected products when called', () => {
			service.getSingleProduct(1).subscribe(product => {
				expect(product).toEqual(dummyProduct);
			})
		
		     const request = httpMock.expectOne(`${service["productUrl"]}/1`);
             expect(request.request.method).toBe('GET');
             request.flush(dummyProduct);  	
		})
	    
	   
	})	
	describe('updateProduct', () => {
		const dummyProduct = { id : 1, name: "tshirt", quantity: 1, description: "cool shirt", price: 2.50, image: "an image"};

		it('should return the expected product when called', () => {
			service.updateProduct(1, "tshirt", 1, "cool shirt", 2.50,"an image" ).subscribe(product => {
				expect(product).toEqual(dummyProduct);
			})
		
		     const request = httpMock.expectOne(`${service["productUrl"]}/create-update`);
             expect(request.request.method).toBe('PUT');
             request.flush(dummyProduct);  	
		})
	    
	   
	})	
	describe('purchase', () => {
		

		it('should return the expected product when called', () => {
			service.purchase(dummyProducts).subscribe(products => {
				expect(products).toEqual(dummyProducts);
			})
		
		     const request = httpMock.expectOne(`${service["productUrl"]}`);
             expect(request.request.method).toBe('PATCH');
             request.flush(dummyProducts);  	
		})
	})
     	 
	 describe('createProduct', () => {
        const dummyProduct = { id : 1, name: "tshirt", quantity: 1, description: "cool shirt", price: 2.50, image: "an image"};

		it('should return the expected product when called', () => {
			service.createProduct("tshirt", 1, "cool shirt",2.50, "an image").subscribe(product => {
				expect(product).toEqual(dummyProduct);
			})
		
		     const request = httpMock.expectOne(`${service["productUrl"]}/create-update`);
             expect(request.request.method).toBe('PUT');
             request.flush(dummyProduct);  	
		

	})	
   })

	 describe('addPurchase', () => {
       
		it('should return the expected product when called', () => {
			service.addPurchase(dummyProducts).subscribe(products => {
				expect(products).toEqual(dummyProducts);
			})
		
		     const request = httpMock.expectOne(`${service["purchasesUrl"]}`);
             expect(request.request.method).toBe('POST');
             request.flush(dummyProducts);  	
		

	})	
   })
   
   	 describe('deleteProduct', () => {
       
		it('should return the expected product when called', () => {
			service.addPurchase(dummyProducts).subscribe(products => {
				expect(products).toEqual(dummyProducts);
			})
		
		     const request = httpMock.expectOne(`${service["purchasesUrl"]}`);
             expect(request.request.method).toBe('POST');
             request.flush(dummyProducts);  	
		

	})	
   })
})
