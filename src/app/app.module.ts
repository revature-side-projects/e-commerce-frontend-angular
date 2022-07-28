import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
<<<<<<< HEAD
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
=======
import { ReviewComponent } from './components/review/review.component';
import { ReviewSubmitComponent } from './components/review-submit/review-submit.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
>>>>>>> 482d189b49e0d50c5a5fd61443e961069885780f
=======


import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ReviewComponent } from './components/review/review.component';
import { ReviewSubmitComponent } from './components/review-submit/review-submit.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

>>>>>>> e3db8f717784f5ac8cf285a15bffcbac2d6a3d5b

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ProductCardComponent,
    CartComponent,
    CheckoutComponent,
    DisplayProductsComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    SearchbarComponent,
    SearchFilterComponent
=======
=======

    SearchbarComponent,

    CreateProductComponent,

>>>>>>> e3db8f717784f5ac8cf285a15bffcbac2d6a3d5b
    ReviewComponent,
    ReviewSubmitComponent,
    ProductDetailsComponent,
    UserProfileComponent
<<<<<<< HEAD
>>>>>>> 482d189b49e0d50c5a5fd61443e961069885780f
=======
>>>>>>> e3db8f717784f5ac8cf285a15bffcbac2d6a3d5b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
