import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { AuthService } from '@auth0/auth0-angular';
import { AppComponent } from '../../app.component';
import { User } from '../../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // currentUserString: any = sessionStorage.getItem('user');
  // currentUser: User = JSON.parse(this.currentUserString);

  cartCount!: number;
  subscription!: Subscription;

  @Input() role: string = 'GUEST';

  constructor(
    private router: Router,
    private productService: ProductService,
    public auth: AuthService,
    private appComponent: AppComponent
  ) {}

  ngOnInit(): void {
    this.subscription = this.productService
      .getCart()
      .subscribe((cart) => (this.cartCount = cart.cartCount));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  notSearching(): void {
    this.appComponent.isSearching = false;
    this.appComponent.found = false;
    this.appComponent.searchProducts = [];
    this.appComponent.search = '';
  }
}
