import { User } from './user';



describe('User', () => {
  it('should create a user with initialized fields', () => {
    let user = new User("email", "fName", "lName", "pwd","role",[],[], []);
    expect(user).toBeTruthy();
    
    expect(user.email).toEqual("email");
    expect(user.firstName).toEqual("fName");
    expect(user.lastName).toEqual("lName");
    expect(user.password).toEqual("pwd");
    expect(user.role).toEqual("role");
    expect(user.purchases).toEqual([]);
    expect(user.reviews).toEqual([]);
    expect(user.addresses).toEqual([]); 
   

  });
});