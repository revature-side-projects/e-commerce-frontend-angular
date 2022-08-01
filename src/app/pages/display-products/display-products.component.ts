import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { AuthService } from '@auth0/auth0-angular';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { AppComponent } from '../../app.component';
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css'],
})
export class DisplayProductsComponent implements OnInit {
  allProducts: Product[] = [];
  role: string = this.authentication.role;

  constructor(
    private productService: ProductService,
    public auth: AuthService,
    private userService: UserService,
    private authentication: AuthenticationService,
    public appComponent: AppComponent
  ) {}


  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((authenticated) => {
      if (authenticated) {
        this.auth
          .getAccessTokenSilently()
          .pipe(
            switchMap((token) =>{
                this.authentication.token = token;
                return this.productService.getProducts();
              }
            ),
          )
          .subscribe({
            next:(products => {

              this.allProducts = products;
              this.auth.user$.subscribe({
                next:(user)=>{

                  this.auth.idTokenClaims$.subscribe({
                    next:(data)=>{

                      if (data) {
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
                          this.authentication.role = data["http://finally.com/roles"][0].toUpperCase();
                        } else {
                          this.authentication.role = "CUSTOMER";
                        }

                        this.userService.findUserByEmail(email).subscribe({
                          next:(value) => {
                            sessionStorage.setItem('userId', String(value.id));
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
                              next: () => {
                                this.userService.findUserByEmail(email).subscribe({
                                  next:(value) => {
                                    sessionStorage.setItem('userId', String(value.id));
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
                                  }})
                              },
                              error: (bruh)=>{
                                console.log(bruh)
                              }
                            });

                          }
                        })
                      }
                    }
                  })
                }
              })
            })
          })
      } else {
        this.productService.getProducts().subscribe(
          (resp) => (this.allProducts = resp),
          (err) => console.log(err)
        );
      }
    })
  }
}
