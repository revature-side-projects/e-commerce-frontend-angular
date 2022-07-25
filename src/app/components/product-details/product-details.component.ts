import {ProductService} from './../../services/product.service';
import {Subscription} from 'rxjs';
import {Component, Input, OnInit} from '@angular/core';
import {Product} from 'src/app/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: number = sessionStorage.getItem("selectedProductId") as unknown as number;
  productDetail: Product = new Product(0, "", 0, "",0, "");

  cartCount!: number;
  products: {
    product: Product,
    quantity: number
  }[] = [];
  subscription!: Subscription;
  totalPrice: number = 0;

  @Input() productInfo!: Product;



  constructor(private productService: ProductService) { }



ngOnInit(): void {
    this.productService.getSingleProduct(this.productId).subscribe(
      response => this.productDetail = response,
      err => {console.log(err)});

  this.subscription = this.productService.getCart().subscribe(
    (cart) => {
      this.cartCount = cart.cartCount;
      this.products = cart.products;
      this.totalPrice = cart.totalPrice;
    }
  );
  }

  addToCart(product: Product): void {

    let inCart = false;

    this.products.forEach(
      (element) => {
        if(element.product == product){
          ++element.quantity;
          let cart = {
            cartCount: this.cartCount + 1,
            products: this.products,
            totalPrice: this.totalPrice + product.price
          };
          this.productService.setCart(cart);
          inCart=true;
          return;
        };
      }
    );

    if(inCart == false){
      let newProduct = {
        product: product,
        quantity: 1
      };
      this.products.push(newProduct);
      let cart = {
        cartCount: this.cartCount + 1,
        products: this.products,
        totalPrice: this.totalPrice + product.price
      }
      this.productService.setCart(cart);
    }

  }





}
