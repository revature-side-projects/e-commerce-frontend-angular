import { TestBed } from '@angular/core/testing';

import { AddressService } from './address.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('AddressService', () => {
  let service: AddressService;
  let httpMock: HttpTestingController;
  
  
  beforeEach(() => {
    TestBed.configureTestingModule({
	   imports: [HttpClientTestingModule],
	   providers:[AddressService]
    });
    service = TestBed.inject(AddressService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  
  afterEach(() => {
	httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  describe('getUserAddresses', () => {
	it('should return expected addresses when called', ()=>{
	
	const dummyAddresses = [
		{
			street: "sesame",
			secondary: "apt 1",
			city: "revcity",
			state: "VA",
			zip: "12345",
			users: []
		},
		{
			street: "placebo",
			secondary: "apt 1",
			city: "revcity",
			state: "VA",
			zip: "12345",
			users: []
		}
	]
	service.getUserAddresses(1).subscribe(addresses => {
		expect(addresses.length).toBe(2);
		expect(addresses).toEqual(dummyAddresses);
	})
	
	const request = httpMock.expectOne(`${service.addressUrl}/user/1`);
	expect(request.request.method).toBe('GET');
	request.flush(dummyAddresses);
  })	
 })
	
  
  describe('addAddress', () => {
     it('should return expected address value when called', () => {
	   const dummyAddress = {
			street: "placebo",
			secondary: "apt 1",
			city: "revcity",
			state: "VA",
			zip: "12345",
			users: []
		};
	service.addAddress(dummyAddress, 1).subscribe(address => {
		expect(address).toEqual(dummyAddress);
	})
	const request = httpMock.expectOne(`${service.addressUrl}`);
	expect(request.request.method).toBe('POST');
	request.flush(dummyAddress);
		
     })	
  })
  describe('updateAddress', () => {
     it('should return expected address value when called', () => {
	   const dummyAddress = {
			street: "placebo",
			secondary: "apt 1",
			city: "revcity",
			state: "VA",
			zip: "12345",
			users: []
		};
	service.updateAddress(dummyAddress,1 ).subscribe(address => {
		expect(address).toEqual(dummyAddress);
	})
	const request = httpMock.expectOne(`${service.addressUrl}`);
	expect(request.request.method).toBe('PUT');
	request.flush(dummyAddress);
		
     })	
  })
  
});
