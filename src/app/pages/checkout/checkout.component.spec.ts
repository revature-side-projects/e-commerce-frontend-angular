import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutComponent } from './checkout.component';

<<<<<<< HEAD:src/app/pages/checkout/checkout.component.spec.ts
=======
import { RouterTestingModule} from '@angular/router/testing';
import {ProductService} from 'src/app/services/product.service';
import {of} from 'rxjs';


>>>>>>> 4bd3e1d11cb57551743587ebe3fce235b03e43ab:src/app/components/checkout/checkout.component.spec.ts
describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async () => {
	const productServiceSpy = jasmine.createSpyObj<ProductService>(['getCart']);
	productServiceSpy.getCart.and.returnValue(of());
	
    await TestBed.configureTestingModule({
<<<<<<< HEAD:src/app/pages/checkout/checkout.component.spec.ts
      declarations: [CheckoutComponent],
    }).compileComponents();
=======

      declarations: [ CheckoutComponent ],
      imports: [RouterTestingModule],
      providers: [{provide: ProductService, useValue: productServiceSpy}]

    })
    .compileComponents();
>>>>>>> 4bd3e1d11cb57551743587ebe3fce235b03e43ab:src/app/components/checkout/checkout.component.spec.ts
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
