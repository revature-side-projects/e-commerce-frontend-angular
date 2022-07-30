
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { RouterModule } from '@angular/router';
import { environment as env } from '../environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DisplayProductsComponent } from './pages/display-products/display-products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';


import { ReviewSubmitComponent } from './components/review-submit/review-submit.component';
import { ReviewComponent } from './components/review/review.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthButtonComponent,
    NavbarComponent,
    DisplayProductsComponent,
    ProductCardComponent,
    CartComponent,
    CheckoutComponent,

    ProductDetailsComponent,
    ReviewSubmitComponent,
    ReviewComponent,
    UserProfileComponent,
    CreateProductComponent,
    SearchbarComponent,


    DisplayProductsComponent,

    SearchbarComponent,


    CreateProductComponent,

    ReviewComponent,
    ReviewSubmitComponent,
    ProductDetailsComponent,
    DisplayProductsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        ...env.httpInterceptor,
      },
    }),
  ],

  exports: [RouterModule],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
