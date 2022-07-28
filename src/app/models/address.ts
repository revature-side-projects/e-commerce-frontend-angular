<<<<<<< HEAD
import { User } from './user';

export class Address {
  street: string;
  secondary: string;
  city: string;
  state: string;
  zip: string;
  users: User[];

  constructor(
    street: string,
    secondary: string,
    city: string,
    state: string,
    zip: string,
    users: User[]
  ) {
    this.street = street;
    this.secondary = secondary;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.users = users;
  }
=======
export class Address {

    firstName: string
    lastName: string
    address1: string
    address2: string
    city: string
    state: string
    zip: string
    country: string
  
    constructor (
      firstName: string,
      lastName: string,
      address1: string,
      address2: string,
      city: string,
      state: string,
      zip: string,
      country: string
    ) {
      this.firstName = firstName
      this.lastName = lastName
      this.address1 = address1
      this.address2 = address2
      this.city = city
      this.state = state
      this.zip = zip
      this.country = country
    }

>>>>>>> 4bd3e1d11cb57551743587ebe3fce235b03e43ab
}
