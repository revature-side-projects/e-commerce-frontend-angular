import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ProductService} from 'src/app/services/product.service';
import {of} from 'rxjs';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
	const productServiceSpy = jasmine.createSpyObj<ProductService>(['getCart']);
	productServiceSpy.getCart.and.returnValue(of());
	
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports: [RouterTestingModule],
      providers: [{provide: ProductService, useValue: productServiceSpy}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/*  
  it('should call getCart' , () => {
	let productService = fixture.debugElement.injector.get(ProductService);
	let stub = spyOn(productService, "getCart").and.callFake(() => {
		return of()
	})
  })
 */
});
