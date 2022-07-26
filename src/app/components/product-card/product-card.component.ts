import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Product} from 'src/app/models/product';
import {ProductService} from 'src/app/services/product.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  cartCount!: number;
  products: {
    product: Product,
    quantity: number 
    
  }[] = [];
  
  subscription!: Subscription;
  totalPrice: number = 0;


  @Input() productInfo!: Product;

  constructor(private productService: ProductService, private router: Router) { }
  ngOnInit(): void {
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
        if(element.product.id == product.id){
          ++element.quantity;
          let cart = {
            cartCount: this.cartCount + 1,
            products: this.products,
            totalPrice: this.totalPrice + (product.price * Number((<HTMLInputElement>document.getElementById((`qty${product.id}`))).value))
          };
          this.productService.setCart(cart);
          inCart = true;
          return;
        }
        ;
      }
    );

    if (inCart == false) {
      let newProduct = {
        product: product,
        quantity: Number((<HTMLInputElement>document.getElementById((`qty${product.id}`))).value)
      };
      this.products.push(newProduct);
      let cart = {
        cartCount: this.cartCount + 1,
        products: this.products,
        totalPrice: this.totalPrice + (product.price * newProduct.quantity)
      }
      this.productService.setCart(cart);
    }

  }

  selectProduct(): void {
    sessionStorage.setItem('selectedProductId', this.productInfo.id.toString());
    this.router.navigate(['/product-details']);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
