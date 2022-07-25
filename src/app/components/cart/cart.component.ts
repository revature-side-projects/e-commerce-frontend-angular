//import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartCount!: number;

  products: {
    product: Product,
    quantity: number
  }[] = [];
  price!: number;
  totalPrice!: number;
  cartProducts: Product[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getCart().subscribe(
      (cart) => {
        //Add this line (below) to make the cart count work - takes away NaN error
        this.cartCount = cart.cartCount;
        this.products = cart.products;
        this.products.forEach(
          (element) => this.cartProducts.push(element.product)
        );
        this.totalPrice = cart.totalPrice;
      }
    );
  }

  emptyCart(): void {
    let cart = {
      cartCount: 0,
      products: [],
      totalPrice: 0.00
    };
    this.productService.setCart(cart);
    this.router.navigate(['/home']);
  }

  // Method to Decrement an Item in the Cart
  decrement(product: Product): void {

    this.products.forEach(
      (element) => {
        if (element.product == product && element.quantity != 0) {
          --element.quantity;
          let cart = {
            cartCount: this.cartCount - 1,
            products: this.products,
            totalPrice: Math.round((this.totalPrice - product.unitPrice + Number.EPSILON) * 100) / 100
          };
          this.productService.setCart(cart);
          return;
        };
  
      }
    );


  }

  //Method to Increment an Item in the Cart 
  increment(product: Product): void {

    this.products.forEach(
      (element) => {
        if (element.product == product) {
          ++element.quantity;
          let cart = {
            cartCount: this.cartCount + 1,
            products: this.products,
            totalPrice: Math.round((this.totalPrice + product.unitPrice + Number.EPSILON) * 100) / 100
          };
          this.productService.setCart(cart);
          return;
        };
      }
    );
  }

  // Method to Remove an Item in the Cart
  removeFromCart(product: Product): void {
    let tempCount = 0;
    let tempQuantity = 0;
    this.products.forEach(
      (element) => {
        if (element.product == product) {
          tempQuantity = element.quantity;
          this.products.splice(tempCount, 1);
          let cart = {
            cartCount: this.cartCount - tempQuantity,
            products: this.products,
            totalPrice: Math.round((this.totalPrice - product.unitPrice * tempQuantity + Number.EPSILON) * 100) / 100
          };
          this.productService.setCart(cart);
          return;
        };
        tempCount++;
      }
    );

  }
}



