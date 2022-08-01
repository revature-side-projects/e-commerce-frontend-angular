import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('UserService', () => {
  let service: UserService,
      httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
	  imports: [HttpClientTestingModule],
	  providers: [
		UserService	
	  ]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
    
  });
  
  afterEach(()=>{
	httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  
 describe('findAllUsers', ()=>{
  		it('should return expected users when findAllUsers() is called via GET', () =>{
		   const dummyUsers = [
			{email: 'email', firstName: 'Bob', lastName: 'Roberts', password: 'password', role: 'user', purchases: [], reviews: [], addresses: []},
			{email: 'email', firstName: 'Cody', lastName: 'Roberts', password: 'password', role: 'user', purchases: [], reviews: [], addresses: []},
			{email: 'email', firstName: 'Dave', lastName: 'Roberts', password: 'password', role: 'user', purchases: [], reviews: [], addresses: []}
					
		]
		service.findAllUsers().subscribe(users => {
			expect(users.length).toBe(3);
			expect(users).toEqual(dummyUsers);
		})
		
		const request = httpMock.expectOne(`${service.userUrl}`);
		expect(request.request.method).toBe('GET');
		
		request.flush(dummyUsers);
		
	    })	
  })

describe('findUserById', ()=>{
  		it('should return expected user when findUserById(int ) is called', () =>{
		   const dummyUser = {email: 'email', firstName: 'Bob', lastName: 'Roberts', password: 'password', role: 'user', purchases: [], reviews: [], addresses: []};
			
		service.findUserById(1).subscribe(user => {
			expect(user).toEqual(dummyUser);
		})
		
		const request = httpMock.expectOne(`${service.userUrl}/1`);
		expect(request.request.method).toBe('GET');
		
		request.flush(dummyUser);
		
	    })	
 }) 
describe('findUserByUsername', ()=>{
  		it('should return expected user when findUserByUsername(string ) is called', () =>{
		   const dummyUser = {email: 'email', firstName: 'Bob', lastName: 'Roberts', password: 'password', role: 'user', purchases: [], reviews: [], addresses: []};
			
		service.findUserByUsername("Bob").subscribe(user => {
			expect(user).toEqual(dummyUser);
		})
		
		const request = httpMock.expectOne(`${service.userUrl}/Bob`);
		expect(request.request.method).toBe('GET');
		
		request.flush(dummyUser);
		
	    })	
  })
  
  describe('registerUser', ()=>{
  		it('should return expected user when registerUser(User ) is called', () =>{
		   const dummyUser = {email: 'email', firstName: 'Bob', lastName: 'Roberts', password: 'password', role: 'user', purchases: [], reviews: [], addresses: []};
			
		service.registerUser(dummyUser).subscribe(user => {
			expect(user).toEqual(dummyUser);
		})
		
		const request = httpMock.expectOne(`${service.userUrl}`);
		expect(request.request.method).toBe('POST');
		
		request.flush(dummyUser);
		
	    })	
  })
  
    describe('updateUser', ()=>{
  		it('should return expected user when updateUser(User ) is called', () =>{
		   const dummyUser = {email: 'email', firstName: 'Bob', lastName: 'Roberts', password: 'password', role: 'user', purchases: [], reviews: [], addresses: []};
			
		service.updateUser(dummyUser,1).subscribe(user => {
			expect(user).toEqual(dummyUser);
		})
		
		const request = httpMock.expectOne(`${service.userUrl}`);
		expect(request.request.method).toBe('PUT');
		
		request.flush(dummyUser);
		
	    })	
  })
  describe('deleteUserById', ()=>{
  		it('should return expected user when  deleteUserByid(id ) is called', () =>{
		   const dummyUser = {email: 'email', firstName: 'Bob', lastName: 'Roberts', password: 'password', role: 'user', purchases: [], reviews: [], addresses: []};
			
		service.deleteUserById(1).subscribe(user => {
			expect(user).toEqual(dummyUser);
		})
		
		const request = httpMock.expectOne(`${service.userUrl}/1`);
		expect(request.request.method).toBe('DELETE');
		
		request.flush(dummyUser);
		
	    })	
  })
  
  describe('getMyAddresses', () =>{
	it('should return expected addresses when called', () =>{
		const dummyAddresses = [
			{street: "1234 Revature Dr", secondary: "apt 1", city: "Revcity", state: "VA", zip: "12345", users: [] },
			{street: "1234 Revature Dr", secondary: "apt 2", city: "Revcity", state: "VA", zip: "12345", users: [] },
		    {street: "1234 Revature Dr", secondary: "apt 3", city: "Revcity", state: "VA", zip: "12345", users: [] }
		];

		service.getMyAddresses(1).subscribe(addresses => {
			expect(addresses.length).toBe(3);
			expect(addresses).toEqual(dummyAddresses);
		})
		
		const request = httpMock.expectOne(`${service.userUrl}/1/myAddresses`);
		expect(request.request.method).toBe('GET');
		
		request.flush(dummyAddresses);
		
	    })
    })	

  describe('deleteFromAddressesById', () =>{
	it('should return expected addresses when called', () =>{
		
        const dummyAddress = 	{street: "1234 Revature Dr", secondary: "apt 1", city: "Revcity", state: "VA", zip: "12345", users: [] }; 
		service.deleteFromMyAddressesById(1).subscribe(address => {
			
			expect(address).toEqual(dummyAddress);
		})
		
		const request = httpMock.expectOne(`${service.userUrl}/1`);
		expect(request.request.method).toBe('DELETE');
		
		request.flush(dummyAddress);
		
	    })
    })    		
//TODO test error components	

})

 
