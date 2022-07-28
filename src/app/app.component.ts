import { Purchase } from './models/purchase';
import { Address } from './models/address';
import { User } from './models/user';
import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Commerce Client';

  public isSearching: boolean = false;
  //list of products from search
  // this will be set when issearching is true. 
  searchProducts: Product[] = [];
  search: string = 'help';

  addresses: Address[] = [];
  purchases: Purchase[] = [];
  reviews: any[] = []
  curUser: User = new User(0, "", "", "", "", "", this.reviews, this.purchases, this.addresses);

}
