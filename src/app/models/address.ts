import { User } from "./user";

export class Address {
  id: number;
  street: string;
  secondary: string;
  city: string;
  state: string;
  zip: string;
  users: User[];
  

  constructor (
    id: number,
    street: string,
    secondary: string,
    city: string,
    state: string,
    zip: string,
    users: User[]
    
  ) {
    this.id = id
    this.street = street
    this.secondary = secondary
    this.city = city
    this.state = state
    this.zip = zip
    this.users = users
    
  }
}
