import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
	imports: [HttpClientTestingModule],
	providers:[AuthenticationService]
	
  });
    service = TestBed.inject(AuthenticationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  describe('login', () => {
	it('should return the expected value when called', () => {
		service.login("email", "password").subscribe(result => {
			expect(result).toBeTruthy();
		})
		
		const request = httpMock.expectOne(`${service.authUrl}/login`);
		expect(request.request.method).toBe('POST');
		request.flush({email: "email", password: "password"})
	})
  })
  
   describe('logout', () => {
	it('should return the expected value when called', (done) => {
	
		expect(service.logout()).toBeTruthy;
		done();
		
	})

 describe('register', () => {
	it('should return the expected value when called', () => {
		service.register("fname", "lname", "email", "password").subscribe(result => {
			expect(result).toBeTruthy();
		})
		
		const request = httpMock.expectOne(`${service.authUrl}/register`);
		expect(request.request.method).toBe('POST');
		request.flush({firstName: "fname", lastName: "lname", email: "email", password: "password"})
	})
  })
	
	
  })
  
  
});
