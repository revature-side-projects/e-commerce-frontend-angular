import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AuthService} from 'src/app/services/auth.service';
import { NavbarComponent } from './navbar.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ProductService} from 'src/app/services/product.service';

import {of} from 'rxjs';



describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  
  
  beforeEach(async () => {
	const authServiceSpy = jasmine.createSpyObj<AuthService>(['login']);
	authServiceSpy.login.and.returnValue(of());
	const productServiceSpy = jasmine.createSpyObj<ProductService>(['getCart']);
	productServiceSpy.getCart.and.returnValue(of());
	
    await TestBed.configureTestingModule({

      declarations: [ NavbarComponent],
      imports: [RouterTestingModule],
      providers:[{provide: AuthService, useValue: authServiceSpy},
                 {provide: ProductService, useValue: productServiceSpy}]
     
    }).compileComponents();
    
  
    

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  

});
