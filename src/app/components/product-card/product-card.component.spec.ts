import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import { ProductService } from 'src/app/services/product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

/*
describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
	 const productServiceSpy = jasmine.createSpyObj<ProductService>(['getCart']);


     await TestBed.configureTestingModule({

	  imports:[HttpClientTestingModule],
	  providers: [{ProductService, useValue: productServiceSpy}],
      declarations: [ ProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

/*
  it('should create', () => {
    expect(component).toBeTruthy;
  });

});
*/
