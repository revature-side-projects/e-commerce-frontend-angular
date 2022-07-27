import { Purchase } from './purchase';
import { Product } from './product';
import { Address } from './address';

export class User{

    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
    purchases: Purchase[];
    reviews: any[];
    addresses: Address [];

    constructor(
        id: number,
        email: string,
        password: string,
        firstName: string,
        lastName: string,
        role: string,
        purchases: Purchase[],
        reviews: any[],
        addresses: Address []
    ) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.password = password
        this.role = role
        this.email = email
        this.addresses = addresses
        this.purchases = purchases
        this.reviews = reviews
    }

}