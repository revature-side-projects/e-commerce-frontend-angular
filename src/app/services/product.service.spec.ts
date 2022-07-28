import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
<<<<<<< HEAD
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


=======
import {HttpClientTestingModule} from '@angular/common/http/testing';
>>>>>>> f696cb742ec14f1179900fe7ea26ca300a465a02
describe('ProductService', () => {
  let service: ProductService;
  let httpTestingController: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
		imports: [HttpClientTestingModule],
		providers: [ProductService]
     });
     httpTestingController = TestBed.inject(HttpTestingController);
     service = TestBed.inject(ProductService);
=======
	imports: [HttpClientTestingModule]
   });
    service = TestBed.inject(ProductService);
>>>>>>> f696cb742ec14f1179900fe7ea26ca300a465a02
  });

  afterEach(() => {
	  httpTestingController.verify();
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
 /* 
  xit('#setCart should set up a new cart', () =>{
	  const fixture = TestBed.createComponent(ProductService);
	  const productService = fixture.componentInstance;
	  const service = fixture.debugElement.injector.get(ProductService);
	  const productServiceSpy = jasmine.createSpyObj<ProductService>(['setCart']);
	  productServiceSpy.setCart.and.returnValue()
	  const mockCart = {
	    cartCount: 1,
		products:[ {
		   product: {
			id : 1,
			name: "tshirt",
			quantity: 1,
			description: "cool shirt",
			price: 2.50,
			image: "an image"
		   },
		   quantity: 1
		   }],
		totalPrice: 2.50
		
	  }
	  
	

   });
*/  

	
  
  
});
