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
  role: string = 'GUEST';

  constructor(
    private productService: ProductService,
    public auth: AuthService,
    private userService: UserService,
    private authentication: AuthenticationService,
    public appComponent: AppComponent
  ) {}

  ngOnInit(): void {
    this.auth.idTokenClaims$.subscribe({
      next:(data)=>{
        if (data) {
          let token:any = data?.__raw;
          let email:any = data?.email;
          let password:any = data?.sub;
          let nickname:any = data?.nickname;

          const potentialNewUser = new User(
            email,
            nickname?.substring(0, nickname?.length / 2),
            nickname?.substring(
              nickname?.length / 2,
              nickname?.length
            ),
            password,
            'CUSTOMER',
            [],
            [],
            []
          );
          if (data["http://finally.com/roles"][0]) {
            this.role = data["http://finally.com/roles"][0].toUpperCase();
          } else {
            this.role = "CUSTOMER";
          }
          localStorage.setItem('auth', token)

          this.authentication.login(email, password).subscribe({
            next: (value) => {
              sessionStorage.setItem('userId', value.id);
              sessionStorage.setItem('user', JSON.stringify(new User(
                value.email,
                value.firstName,
                value.lastName,
                '',
                value.role,
                [],
                [],
                []
              )));
            },
            error: () => {
              this.userService.registerUser(potentialNewUser).subscribe({
                next: (data) => {
                  this.authentication
                    .login(data!.email, data.password)
                    .subscribe({
                      next: (value) => {
                        sessionStorage.setItem('userId', value.id);
                        sessionStorage.setItem(
                          'user',
                          JSON.stringify(new User(
                            value.email,
                            value.firstName,
                            value.lastName,
                            '',
                            value.role,
                            [],
                            [],
                            []
                          ))
                        );
                        this.role = value.role;
                      },
                    });
                }
              });
            }
          });
        }

        this.productService.getProducts().subscribe(
          (resp) => (this.allProducts = resp),
          (err) => console.log(err),
        );
      }
    })

  }
}
