import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  role = this.appComponent.curUser.role;
  cartCount!: number;
  subscription!: Subscription;


  constructor(public appComponent: AppComponent,private authService: AuthService, private router: Router, private productService: ProductService, ) { }

  
  ngOnInit(): void {
    this.subscription = this.productService.getCart().subscribe(
      (cart) => this.cartCount = cart.cartCount
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
  notSearching():void{
    this.appComponent.isSearching = false; 
    this.appComponent.searchProducts = []; 
    this.appComponent.search = '';
  }

  

}
