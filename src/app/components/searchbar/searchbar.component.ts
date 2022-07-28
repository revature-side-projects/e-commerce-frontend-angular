import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {


  searchForm = this.formBuilder.group({
    query: ''
  });

  searchTerm: string= '';

  constructor(private productService: ProductService,
              private formBuilder: FormBuilder,
              public appComponent: AppComponent,
              public router:Router) { }

  ngOnInit(): void {
    
  }

  //triggered when we submit search 
  onSubmit():void{
    //isSearching boolean: if the user is searching for products, set the 
    // search results to the products  from this search 
    // and set the string message on the top of the search! 
  

    // when do we Not display searched terms? when the user clicks the homepage, it will reset search terms 
    
    this.appComponent.isSearching = true; 
    this.appComponent.search = this.searchTerm;
    this.router.navigate(['/home']); // navigate to home so that on other pages, users are able to search 
    console.log(`hitting search() in searchbar component! it was : ${this.searchTerm}`)

    this.productService.getSearchProducts(this.searchTerm).subscribe(
      (resp) => {console.log(resp);
        this.appComponent.searchProducts = resp},
      (err) => console.log(err),
      () => console.log("Products search Retrieved")
    );
  }

  search(){
    

  }

}
