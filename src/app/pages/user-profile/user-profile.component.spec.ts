import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressService } from '../../services/address.service';
import { ReviewService } from '../../services/review.service';
import { Router } from '@angular/router';
import { PurchaseService } from '../../services/purchase.service';
import {UserProfileComponent } from './user-profile.component';
import {UserService} from 'src/app/services/user.service';
import {of} from 'rxjs';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService } from '@auth0/auth0-angular';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

fdescribe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let reviewService: ReviewService;
  let addressService: AddressService;
  
  let router : RouterTestingModule;
  const mockReviews = [
   {
	 id: 1,
  stars: 1,
  starsUnchecked: 4,
  title: "bad review",
  review: "bad product",
  posted: "now",
  updated: "now",
  
  user:{
    id: 1,
    email: '',
    password: '',
    firstName: '',
    lastName: '',
   },
  product: {
    id: 0,
    quantity: 1,
    price: 2.00,
    description: 'tshirt',
    image: '',
    name: '',
  }
  },
  {
	 id: 2,
  stars: 5,
  starsUnchecked: 0,
  title: "good review",
  review: "great product",
  posted: "now",
  updated: "now",
  
  user:{
    id: 2,
    email: '',
    password: '',
    firstName: '',
    lastName: '',
   },
  product: {
    id: 2,
    quantity: 1,
    price: 5.00,
    description: 'tshirt',
    image: '',
    name: '',
  }
  }
  ]
	

  beforeEach(async () => {
	//ignore ngOnInit to tes the other functions
	UserProfileComponent.prototype.ngOnInit = () => {};
	
	//needed to handle the null injector errors 
	const userServiceSpy = jasmine.createSpyObj<UserService>(['findUserById']);
	userServiceSpy.findUserById.and.returnValue(of());
	const addressServiceSpy = jasmine.createSpyObj<AddressService>(['getUserAddresses']);
	const purchaseServiceSpy = jasmine.createSpyObj<PurchaseService>(['getAllPurchases']);
	const reviewServiceSpy = jasmine.createSpyObj<ReviewService>(['getAllReviews'])
    await TestBed.configureTestingModule({

      declarations: [ UserProfileComponent ],
     
      providers: [
	     ReviewService, PurchaseService, 
         {provide: UserService, useValue: userServiceSpy},
         {provide: AddressService, useValue: addressServiceSpy},
         {provide: Router, useValue: router},
         {provide: PurchaseService, useValue: purchaseServiceSpy},
         {provide: ReviewService, useValue: reviewServiceSpy},
         {provide: AuthService, useValue: true}
         ],
       schemas: [CUSTOM_ELEMENTS_SCHEMA]
         
    })
    .compileComponents();
    
    reviewService = TestBed.inject(ReviewService);
    addressService = TestBed.inject(AddressService);
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    
    
  });
  
  
  
 
  
  
});
