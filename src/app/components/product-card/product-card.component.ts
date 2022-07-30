
import { Product } from './../../models/product';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from "@angular/router";
import { ProductService } from 'src/app/services/product.service';
import { AppComponent } from 'src/app/app.component';
import { User } from '../../models/user';

import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})


export class ProductCardComponent implements OnInit{
   currentUserString: any = sessionStorage.getItem('user');
   currentUser: User = JSON.parse(this.currentUserString);

  // TODO: change to admin once we retrieve the current user
  @Input() role: string = 'GUEST';
  wantToDelete: boolean = false;
  wantToUpdate: boolean = false;
  cartCount!: number;
  
  products: {

    product: Product;
    quantity: number;

    
  }[] = [];

  subscription!: Subscription;
  
  totalPrice: number = 0;

  msg: string = '';

  @Input() productInfo!: Product;
  constructor(
    public appcomponent: AppComponent,
    private productService: ProductService,
    private router: Router,
    public authService: AuthService
   ) {}


  


  
  


  ngOnInit(): void {
    this.subscription = this.productService.getCart().subscribe((cart) => {
      this.cartCount = cart.cartCount;
      this.products = cart.products;
      this.totalPrice = cart.totalPrice;
    });
  }

  addToCart(product: Product): void {
    let inCart = false;

    let toBuy = Number(
      (<HTMLInputElement>document.getElementById(`qty${product.id}`)).value
    );
    this.msg = '';


   

    if (toBuy < 1) {
      this.msg =
        'Can not add a 0 or negitive number of items to order, please enter a higher order amount.';
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
          inCart=true;
          return;
        };

      }
    );




    if (!inCart) {
      if (toBuy > product.quantity) {
        this.msg =
          'Can not order more items then currently in stock, please enter a lower order amount';
        return;
      }

      let newProduct = {
        product: product,
        quantity: toBuy,
      };
      this.products.push(newProduct);
      let cart = {
        cartCount: this.cartCount + toBuy,
        products: this.products,
        totalPrice: this.totalPrice + product.price * toBuy,
      };
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

  wantsToUpdate() {
    this.wantToUpdate = !this.wantToUpdate;
  }

  updateProductForm = new FormGroup({
    pname: new FormControl(''),
    pquantity: new FormControl(''),
    pdescription: new FormControl(''),
    pprice: new FormControl(''),
    pimage: new FormControl(''),
  });

  onSubmitUpdate(product: Product) {
    let name: string;
    let quantity: number;
    let description: string;
    let price: number;
    let image: string;

    if (this.updateProductForm.get('pname')?.value === '') {
      name = product.name;
    } else {
      // @ts-ignore
      name = this.updateProductForm.get('pname')?.value;
    }

    if (this.updateProductForm.get('pquantity')?.value === '') {
      quantity = product.quantity;
    } else {
      // @ts-ignore
      quantity = this.updateProductForm.get('pquantity')?.value;
    }

    if (this.updateProductForm.get('pdescription')?.value === '') {
      description = product.description;
    } else {
      // @ts-ignore
      description = this.updateProductForm.get('pdescription')?.value;
    }

    if (this.updateProductForm.get('pprice')?.value === '') {
      price = product.price;
    } else {
      // @ts-ignore
      price = this.updateProductForm.get('pprice')?.value;
    }

    if (this.updateProductForm.get('pimage')?.value === '') {
      image = product.image;
    } else {
      // @ts-ignore
      image = this.updateProductForm.get('pimage')?.value;
    }

    this.productService
      .updateProduct(product.id, name, quantity, description, price, image)
      .subscribe(
        () => {
          this.wantToUpdate = false;
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['home']);
        },
        (err) => console.log(err),
        () => this.router.navigate(['home'])
      );
  }

  wantsToDelete() {
    this.wantToDelete = !this.wantToDelete;
  }

  onDeleteProduct(product: Product) {
    // @ts-ignore
    this.productService.deleteProduct(product.id).subscribe(
      () => {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['home']);
      },
      (err: any) => console.log(err),
      () => this.router.navigate(['home'])
    );
  }
}
