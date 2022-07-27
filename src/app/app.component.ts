import { Purchase } from './models/purchase';
import { Address } from './models/address';
import { User } from './models/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Commerce Client';
  addresses: Address[] = [];
  purchases: Purchase[] = [];
  reviews: any[] = []
  curUser: User = new User(0, "", "", "", "", "", this.reviews, this.purchases, this.addresses);
}
