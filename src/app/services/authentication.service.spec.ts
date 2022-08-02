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
  
  describe('getToken', () => {
	it('should retrieve expected token', () => {
		service["_token"] = "token";
    let tok = service.token;
    expect(tok).toEqual("token");
	})

  describe('setToken', () => {
    it('should set set token appropriated', () => {
      service.token = "token";
      expect(service._token).toBe("token");
    })
  })
  describe('setRole', () => {
    it('should set set role appropriated', () => {
      service.role = "admin"
      expect(service._role).toEqual("admin");
    })
  })
  describe('getRole', () => {
    it('should retrieve the expected token', () => {
      service["_role"] = "Admin";
      let role = service.role;
      expect(role).toEqual("Admin");
    })
    })
  
  
  })
})