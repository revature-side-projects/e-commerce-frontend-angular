import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { AuthenticationService } from 'src/app/services/authentication.service';

describe('AuthService', () => {
  let service: AuthenticationService;

  beforeEach(() => {

    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]	 
    });

    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
 
});
