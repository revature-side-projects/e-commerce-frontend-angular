import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
<<<<<<< HEAD:src/app/pages/cart/cart.component.ts
  cartCount!: number;
  products: {
    product: Product;
    quantity: number;
=======

  products: {
    product: Product,
    quantity: number
>>>>>>> 4bd3e1d11cb57551743587ebe3fce235b03e43ab:src/app/components/cart/cart.component.ts
  }[] = [];
  totalPrice!: number;
  cartProducts: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
<<<<<<< HEAD:src/app/pages/cart/cart.component.ts
    this.productService.getCart().subscribe((cart) => {
      this.cartCount = cart.cartCount;
      this.products = cart.products;
      this.products.forEach((element) =>
        this.cartProducts.push(element.product)
      );
      this.totalPrice = cart.totalPrice;
    });
  }

  removeFromCart(product: any) {
    this.cartCount -= product.quantity;
    this.totalPrice -= product.product.price * product.quantity;

    product.quantity = 0;
    //then, update the actual cart a la product-card
    let cart = {
      cartCount: this.cartCount,
      products: this.products.filter((data) => data.quantity > 0),
      totalPrice: this.totalPrice,
    };
    this.productService.setCart(cart);
  }

=======
    this.productService.getCart().subscribe(
      (cart) => {
        this.products = cart.products;
        this.products.forEach(
          (element) => this.cartProducts.push(element.product)
        );
        this.totalPrice = cart.totalPrice;
      }
    );
  }

>>>>>>> 4bd3e1d11cb57551743587ebe3fce235b03e43ab:src/app/components/cart/cart.component.ts
  emptyCart(): void {
    console.log('service', this.productService, this.productService.getCart());
    let cart = {
      cartCount: 0,
      products: [],
      totalPrice: 0.0,
    };
    this.productService.setCart(cart);
    this.router.navigate(['/']);
  }
}
