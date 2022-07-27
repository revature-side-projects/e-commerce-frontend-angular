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
  msg : string = ""


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
    let toBuy = Number((<HTMLInputElement>document.getElementById((`qty${product.id}`))).value);
    this.msg = "";

    if(toBuy < 1){
      this.msg = "Can not add a 0 or negitive number of items to order, please enter a higher order amount."
      return;
    }
    
    this.products.forEach(
      (element) => {
        if (element.product.id == product.id) {
          if(toBuy + element.quantity > product.quantity){
            this.msg = "Can not order more items then currently in stock, please enter a lower order amount.";
            inCart = true;
            return;
          }
          
          element.quantity += toBuy
          let cart = {
            
            cartCount: this.cartCount + toBuy,
            products: this.products,
            totalPrice: this.totalPrice + toBuy
          };
          
          this.productService.setCart(cart);
          inCart = true;
          return;
        }
        ;
      }
    );

    if (inCart == false) {
      
      if(toBuy > product.quantity){
        this.msg = "Can not order more items then currently in stock, please enter a lower order amount";
        return;
      }
      let newProduct = {
        product: product,
        quantity: toBuy
      };
      this.products.push(newProduct);
      let cart = {
        cartCount: this.cartCount + toBuy,
        products: this.products,
        totalPrice: this.totalPrice + (product.price * toBuy)
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
