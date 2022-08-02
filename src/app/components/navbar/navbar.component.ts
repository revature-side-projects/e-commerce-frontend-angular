import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { AuthService } from '@auth0/auth0-angular';
import { AppComponent } from '../../app.component';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cartCount!: number;
  subscription!: Subscription;

  role: string = this.authentication.role;

  constructor(
    private router: Router,
    private productService: ProductService,
    public auth: AuthService,
    public authentication:AuthenticationService,
    private appComponent: AppComponent
  ) {}

  ngOnInit(): void {
    this.subscription = this.productService
      .getCart()
      .subscribe((cart) => (this.cartCount = cart.cartCount));
  }
  notSearching(): void {
    this.appComponent.isSearching = false;
    this.appComponent.found = false;
    this.appComponent.searchProducts = [];
    this.appComponent.search = '';
  }
}
