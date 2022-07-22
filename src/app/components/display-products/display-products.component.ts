import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {

  allProducts: Product[] = [];
  products: Product[] = [];

  currentCategoryId!: number;
  previousCategoryId: number = 1 ;
  searchMode: boolean = false;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });

    // this.productService.getProducts().subscribe(
    //   (resp) => this.allProducts = resp,
    //   (err) => console.log(err),
    //   () => console.log("Products Retrieved")
    // );
  }

  listProducts() {

    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode){
      this.handleSearchProducts();
    }else {
      this.handleListProducts();
    }

  }

  handleSearchProducts(){
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    // //if we have a different keyword than previous
    // //then set the PageNumber to 1
    // //reset if new keyword is coming through
    // if (this.previousKeyword != theKeyword){
    //   this.thePageNumber = 1;
    // }
    //
    // this.previousKeyword = theKeyword;
    // console.log(`keyword=${theKeyword}, thePageNumber=${this.thePageNumber}`);
    //
    // //search fot the products using keyword
    // this.productService.searchProductsPaginate(this.thePageNumber - 1,
    //   this.thePageSize,
    //   theKeyword).subscribe(this.processResult());

    this.productService.searchProducts(theKeyword).subscribe(
      data => {
        this.products = data;
      }
    )
  }

  handleListProducts(){
    //check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      // get the "id" param string. convert string to a number using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;

      // get the "name" param string
      //this.currentCategoryName = this.route.snapshot.paramMap.get('name')!;
    } else {
      // not category id available ... default to category id 1
      this.currentCategoryId = 1;
      //this.currentCategoryName = 'Books';
    }



    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data;
      }
    )
  }

}
