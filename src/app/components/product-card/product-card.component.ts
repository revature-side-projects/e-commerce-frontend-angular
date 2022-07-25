<<<<<<< HEAD
import { AuthService } from 'src/app/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

=======
import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Product} from 'src/app/models/product';
import {ProductService} from 'src/app/services/product.service';
import {Router} from "@angular/router";
>>>>>>> 441441d3c0449f35ad0e326c13c80b255c68f815

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  role = this.authService.userRole;
  wantToUpdate : boolean = false;
  cartCount!: number;
  products: {
    product: Product,
    quantity: number
  }[] = [];
  subscription!: Subscription;
  totalPrice: number = 0;


  @Input() productInfo!: Product;

<<<<<<< HEAD
  constructor(private productService: ProductService,  private router: Router, private authService: AuthService) { }
  
=======
  constructor(private productService: ProductService, private router: Router) { }
>>>>>>> 441441d3c0449f35ad0e326c13c80b255c68f815
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
        if (element.product == product) {
          ++element.quantity;
          let cart = {
            cartCount: this.cartCount + 1,
            products: this.products,
            totalPrice: this.totalPrice + product.price
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

  selectProduct(): void {
    sessionStorage.setItem('selectedProductId', this.productInfo.id.toString());
    this.router.navigate(['/product-details']);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

   
  wantsToUpdate(){
    this.wantToUpdate = !this.wantToUpdate;
  }

  updateProductForm = new FormGroup({
    pname: new FormControl(''),
    pquantity: new FormControl(''),
    pdescription: new FormControl(''),
    pprice: new FormControl(''),
    pimage: new FormControl('')
  })

  onSubmitUpdate(product : Product){
    let name : string = '';
    let quantity : number = 0;
    let description : string = '';
    let price : number = 0;
    let image : string = '';

    if(this.updateProductForm.get('pname')?.value===''){
      name=product.name
    }else{
      name=this.updateProductForm.get('pname')?.value
    }

    if(this.updateProductForm.get('pquantity')?.value===''){
      quantity=product.quantity
    }else{
      quantity=this.updateProductForm.get('pquantity')?.value
    }

    if(this.updateProductForm.get('pdescription')?.value===''){
      description=product.description
    }else{
      description=this.updateProductForm.get('pdescription')?.value
    }

    if(this.updateProductForm.get('pprice')?.value===''){
      price=product.price
    }else{
      price=this.updateProductForm.get('pprice')?.value
    }

    if(this.updateProductForm.get('pimage')?.value===''){
      image=product.image
    }else{
      image=this.updateProductForm.get('pimage')?.value
    }

   this.productService.updateProduct(product.id, name, quantity, description,price,image).subscribe(      
            () => {
            this.wantToUpdate=false;
          },
          (err) => console.log(err),
          () => this.router.navigate(['home']));

  }
}
