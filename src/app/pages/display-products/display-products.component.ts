import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { AuthService } from '@auth0/auth0-angular';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { AppComponent } from '../../app.component';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css'],
})
export class DisplayProductsComponent implements OnInit {
  allProducts: Product[] = [];
  searchProducts: Product[] = [];
  role: string = 'GUEST';
  updateModalVisibility: string = '';
  deleteModalVisibility: string = '';
  productToUpdate: Product = new Product(0,'',0,'',0,'');
  productToDelete: Product = new Product(0,'',0,'',0,'');

  constructor(
    private productService: ProductService,
    public auth: AuthService,
    private userService: UserService,
    private authentication: AuthenticationService,
    public appComponent: AppComponent,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.auth.user$.subscribe({
      next: (user) => {

        if (
          user !== null &&
          user!.email !== undefined &&
          user?.sub !== undefined
        ) {
          this.authentication.login(user.email, user?.sub).subscribe({
            next: (value) => {
              sessionStorage.setItem('userId', value.id);

              const newUser = new User(
                value.email,
                value.firstName,
                value.lastName,
                '',
                value.role,
                [],
                [],
                []
              );
              sessionStorage.setItem('user', JSON.stringify(newUser));
              this.role = value.role;
            },
            error: (_err) => {
              if (
                user?.nickname !== undefined &&
                user.email !== undefined &&
                user.sub !== undefined
              ) {
                const newUser = new User(
                  user.email,
                  user?.nickname?.substring(0, user?.nickname?.length / 2),
                  user?.nickname?.substring(
                    user?.nickname?.length / 2,
                    user?.nickname?.length
                  ),
                  user?.sub,
                  'CUSTOMER',
                  [],
                  [],
                  []
                );

                this.userService.registerUser(newUser).subscribe({
                  next: (data) => {
                    if (
                      data.email !== undefined &&
                      data.password !== undefined
                    ) {
                      this.authentication
                        .login(data.email, data.password)
                        .subscribe({
                          next: (value) => {
                            sessionStorage.setItem('userId', value.id);
                            const newUserTwo = new User(
                              value.email,
                              value.firstName,
                              value.lastName,
                              '',
                              value.role,
                              [],
                              [],
                              []
                            );
                            sessionStorage.setItem(
                              'user',
                              JSON.stringify(newUserTwo)
                            );
                            this.role = value.role;
                          },
                        });
                    }
                  },
                  error: (_errTwo) => {
                    //Intentional: Removed console logging
                  },
                });
              }
            },
          });
        }
      },
    });
    this.productService.getProducts().subscribe(
      (resp) => (this.allProducts = resp),
      (err) => {
        //Intentional: Removed console logging
      },
      () => {
        //Intentional: Removed console logging
      }
    );
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
      name = this.updateProductForm.get('pname')?.value;
    }

    if (this.updateProductForm.get('pquantity')?.value === '') {
      quantity = product.quantity;
    } else {
      quantity = this.updateProductForm.get('pquantity')?.value;
    }

    if (this.updateProductForm.get('pdescription')?.value === '') {
      description = product.description;
    } else {
      description = this.updateProductForm.get('pdescription')?.value;
    }

    if (this.updateProductForm.get('pprice')?.value === '') {
      price = product.price;
    } else {
      price = this.updateProductForm.get('pprice')?.value;
    }

    if (this.updateProductForm.get('pimage')?.value === '') {
      image = product.image;
    } else {
      image = 'https://revazon-image-bucket.s3.amazonaws.com/' + this.updateProductForm.get('pimage')?.value;
    }
    this.productService
      .updateProduct(product.id, name, quantity, description, price, image)
      .subscribe(
        () => {
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
        },
        (err) => console.log(err),
        () => this.router.navigate([''])
      );
  }

  onDeleteProduct(product: Product) {
    this.productService.deleteProduct(product.id).subscribe(
      () => {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
      },
      (err: any) => console.log(err),
      () => this.router.navigate([''])
    );
  }

  closePopup() {
    this.updateModalVisibility = 'none';
    this.deleteModalVisibility = 'none';
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
  }


}
