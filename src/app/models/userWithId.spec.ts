import {UserWithId} from './userWithId';

describe('UserWithId', () => {
	
  it('should create a user with initialized fields', () => {
    let userWithId = new UserWithId( 1,"email", "fname",  "lname",  "password",  "role",  [],[], []);
    expect(userWithId).toBeTruthy();
    
 

  });
})