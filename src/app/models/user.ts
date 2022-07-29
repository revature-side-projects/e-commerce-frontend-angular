import { Address } from './address';
import { Purchase } from './purchase';

export class User {
  email!: string;
  firstName!: string;
  lastName!: string;
  password!: string;
  role!: string;
  addresses!: Address[];
  purchases!: Purchase[];
  reviews!: any[];

  constructor1(
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
  }
  constructor2(
    role: string,
    purchases: Purchase[],
    reviews: any[],
    addresses: Address[]
  ) {
    this.role = role;
    this.addresses = addresses;
    this.purchases = purchases;
    this.reviews = reviews;
  }
}
