import { ReviewService } from './../../services/review.service';
import { ProductService } from './../../services/product.service';
import { Subscription } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId: number = sessionStorage.getItem(
    'selectedProductId'
  ) as unknown as number;
  productDetail: Product = new Product(0, '', 0, '', 0, '');

  cartCount!: number;
  products: {
    product: Product;
    quantity: number;
  }[] = [];
  reviews: any = [];
  subscription!: Subscription;
  totalPrice: number = 0;
  userReview: any;
  userId: number = Number(sessionStorage.getItem('userId'));

  @Input() productInfo!: Product;

  constructor(
    private productService: ProductService,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {
    this.productService.getSingleProduct(this.productId).subscribe(
      (response) => (this.productDetail = response),
      (err) => {
        console.log(err);
      }
    );

    this.subscription = this.productService.getCart().subscribe((cart) => {
      this.cartCount = cart.cartCount;
      this.products = cart.products;
      this.totalPrice = cart.totalPrice;
    });

    this.reviewService
      .getProductReviews(this.productId)
      .subscribe((response) => {
        this.reviews = response;
        let userReviewArray = this.reviews.filter((review: any) => {
          return review.user.id === this.userId;
        });
        this.userReview =
          userReviewArray.length > 0 ? userReviewArray[0] : null;
        console.log(this.userId, this.userReview);
      });
  }

  addToCart(product: Product): void {
    let inCart = false;

    this.products.forEach((element) => {
      if (element.product == product) {
        ++element.quantity;
        let cart = {
          cartCount: this.cartCount + 1,
          products: this.products,
          totalPrice: this.totalPrice + product.price,
        };
        this.productService.setCart(cart);
        inCart = true;
        return;
      }
    });

    if (!inCart) {
      let newProduct = {
        product: product,
        quantity: 1,
      };
      this.products.push(newProduct);
      let cart = {
        cartCount: this.cartCount + 1,
        products: this.products,
        totalPrice: this.totalPrice + product.price,
      };
      this.productService.setCart(cart);
    }
  }
}
