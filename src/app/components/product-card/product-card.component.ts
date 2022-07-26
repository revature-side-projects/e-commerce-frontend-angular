import { Product } from './../../models/product';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from "@angular/router";
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  role = this.authService.userRole;
  wantToDelete : boolean = false;
  wantToUpdate : boolean = false;
  cartCount!: number;
  products: {
    product: Product,
    quantity: number 
    
  }[] = [];
  
  subscription!: Subscription;
  totalPrice: number = 0;


  @Input() productInfo!: Product;
  constructor(private productService: ProductService, private router: Router, private authService: AuthService) { }
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
        if (element.product.id == product.id) { 
          element.quantity += Number((<HTMLInputElement>document.getElementById((`qty${product.id}`))).value)
          let cart = {
            cartCount: this.cartCount + Number((<HTMLInputElement>document.getElementById((`qty${product.id}`))).value),
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
        cartCount: this.cartCount + Number((<HTMLInputElement>document.getElementById((`qty${product.id}`))).value),
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
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.onSameUrlNavigation = 'reload';
            this.router.navigate(['home']);
          },
          (err) => console.log(err),
          () => this.router.navigate(['home']));


  }

  wantsToDelete(){
    this.wantToDelete = !this.wantToDelete;
  }

  onDeleteProduct(product : Product){
    this.productService.deleteProduct(product.id).subscribe(      
      () => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['home']);
    },
    (err) => console.log(err),
    () => this.router.navigate(['home']));
  }

}