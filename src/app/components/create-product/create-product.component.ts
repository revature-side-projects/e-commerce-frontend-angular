import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private prodService: ProductService, private router: Router) { }

  createProductForm = new FormGroup({
    pname: new FormControl(''),
    pquantity: new FormControl(''),
    pdescription: new FormControl(''),
    pprice: new FormControl(''),
    pimage: new FormControl('')
  })

  ngOnInit(): void {
  }

  onSubmit(){

    this.prodService.createProduct(this.createProductForm.get('pname')?.value,this.createProductForm.get('pquantity')?.value,
          this.createProductForm.get('pdescription')?.value,this.createProductForm.get('pprice')?.value,
          this.createProductForm.get('pimage')?.value).subscribe(
            () => this.router.navigate(['home'])
          );
  }

}
