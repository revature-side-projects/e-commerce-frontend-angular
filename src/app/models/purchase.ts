import { Product } from './product';
import { User } from './user';

export class Purchase {
  id: number;
  orderPlaced: string;
  product: Product;
  ownerUser: User;

  constructor(
    id: number,
    orderPlaced: string,
    product: Product,
    ownerUser: User
  ) {
    this.id = id;
    this.orderPlaced = orderPlaced;
    this.product = product;
    this.ownerUser = ownerUser;
  }
}
