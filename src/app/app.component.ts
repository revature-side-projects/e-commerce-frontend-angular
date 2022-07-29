import { Component } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'E-Commerce Client';
  public isSearching: boolean = false;
  //list of products from search
  // this will be set when issearching is true.
  searchProducts: Product[] = [];
  search: string = 'help';
}
