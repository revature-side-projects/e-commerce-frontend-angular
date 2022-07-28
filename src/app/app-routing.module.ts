<<<<<<< HEAD
=======

import { CreateProductComponent } from './components/create-product/create-product.component';
import { ReviewSubmitComponent } from './components/review-submit/review-submit.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

>>>>>>> 4bd3e1d11cb57551743587ebe3fce235b03e43ab
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayProductsComponent } from './pages/display-products/display-products.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ReviewSubmitComponent } from './components/review-submit/review-submit.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', component: DisplayProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'review-submit', component: ReviewSubmitComponent },
  { path: 'profile', component: UserProfileComponent },
=======
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: DisplayProductsComponent },
  { path: "cart", component: CartComponent },

  { path: "checkout", component: CheckoutComponent },
  { path: "createproduct", component: CreateProductComponent},
  { path: "product-details", component: ProductDetailsComponent},
  { path: "review-submit", component: ReviewSubmitComponent},
  { path: "profile", component: UserProfileComponent }

>>>>>>> 4bd3e1d11cb57551743587ebe3fce235b03e43ab
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
