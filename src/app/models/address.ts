import { User } from "./user";

export class Address {
    // firstName: string
    // lastName: string
    address1: string
    address2: string
    city: string
    state: string
    zip: string
    country: string
  
    constructor (
      // firstName: string,
      // lastName: string,
      address1: string,
      address2: string,
    id: number;
    street: string;
    secondary: string;
    city: string;
    state: string;
    zip: string;
    users: User[];
      
    ) {
      // this.firstName = firstName
      // this.lastName = lastName
      this.address1 = address1
      this.address2 = address2
      this.id = id
      this.street = street
      this.secondary = secondary
      this.city = city
      this.state = state
      this.zip = zip
      this.users = users
      
    }
}
