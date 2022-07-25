import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';

/*  Sample test unit
	describe('CartComponenet', () => {
		it('First Test Script', () =>{
			console.log('I am inside the test script');
			expect(10).toBe(10);
		});
	})
*/


describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ]
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
});
