import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { AuthService } from '@auth0/auth0-angular';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css'],
})
export class DisplayProductsComponent implements OnInit {
  allProducts: Product[] = [];
  searchProducts: Product[] = [];
  role: string = 'GUEST';

  constructor(
    private productService: ProductService,
    public auth: AuthService,
    private userService: UserService,
    private authentication: AuthenticationService,
    public appComponent: AppComponent
  ) {}

  ngOnInit(): void {
    this.auth.user$.subscribe({
      next: (user) => {
        console.log(user);

        if (
          user !== null &&
          user!.email !== undefined &&
          user?.sub !== undefined
        ) {
          // console.log(user?.email);
          // console.log(user);
          this.authentication.login(user!.email, user?.sub).subscribe({
            next: (value) => {
              console.log(value);
              sessionStorage.setItem('userId', value.id);
              // console.log('Cur User value');
              // console.log(value);
              // console.log(this.appComponent.curUser);
              // this.appComponent.curUserId = value.id;

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
              // this.appComponent.curUser = newUser;
              // console.log(this.appComponent.curUser);
            },
            error: (err) => {
              if (
                user?.nickname !== undefined &&
                user.email !== undefined &&
                user.sub !== undefined
              ) {
                const newUser = new User(
                  user!.email,
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
                // console.log(newUser);

                this.userService.registerUser(newUser).subscribe({
                  next: (data) => {
                    console.log(data);
                    if (
                      data.email !== undefined &&
                      data.password !== undefined
                    ) {
                      this.authentication
                        .login(data!.email, data.password)
                        .subscribe({
                          next: (value) => {
                            // console.log(value)
                            sessionStorage.setItem('userId', value.id);
                            // this.appComponent.curUserId = value.id;
                            // console.log('Cur User value');
                            // console.log(value);
                            // console.log(this.appComponent.curUser);
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
                            sessionStorage.setItem(
                              'user',
                              JSON.stringify(newUser)
                            );
                            this.role = value.role;

                            // this.appComponent.curUser = value;
                          },
                        });
                    }
                  },
                  error: (err) => {
                    console.log(err.status);
                  },
                });
              }

              console.log(err.status);
            },
          });
        }
      },
    });
    this.productService.getProducts().subscribe(
      (resp) => (this.allProducts = resp),
      (err) => console.log(err),
      () => console.log('Products Retrieved')
    );
  }
}
