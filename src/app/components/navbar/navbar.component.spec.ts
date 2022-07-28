import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AuthService} from 'src/app/services/auth.service';
import { NavbarComponent } from './navbar.component';
<<<<<<< HEAD

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
=======
import {RouterTestingModule} from '@angular/router/testing';
import {ProductService} from 'src/app/services/product.service';

import {of} from 'rxjs';


>>>>>>> 4bd3e1d11cb57551743587ebe3fce235b03e43ab

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  
  
  beforeEach(async () => {
	const authServiceSpy = jasmine.createSpyObj<AuthService>(['login']);
	authServiceSpy.login.and.returnValue(of());
	const productServiceSpy = jasmine.createSpyObj<ProductService>(['getCart']);
	productServiceSpy.getCart.and.returnValue(of());
	
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [NavbarComponent],
    }).compileComponents();
=======

      declarations: [ NavbarComponent],
      imports: [RouterTestingModule],
      providers:[{provide: AuthService, useValue: authServiceSpy},
                 {provide: ProductService, useValue: productServiceSpy}]
     
    }).compileComponents();
    
  
    

>>>>>>> 4bd3e1d11cb57551743587ebe3fce235b03e43ab
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
