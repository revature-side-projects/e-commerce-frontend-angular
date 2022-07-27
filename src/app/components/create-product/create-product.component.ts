import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  warningTextMessage : string = '';
  warningNumberMessage : string = '';

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

  checkValue(event: { target: { value: number; }; }) {
    if (event.target.value < 0) {
      event.target.value = 0;
    }
  }

  onSubmit(){

    let name : string = '';
    let quantity : number = 0;
    let description : string = '';
    let price : number = 0;
    let image : string = '';

    if(this.createProductForm.get('pname')?.value===''){
      this.warningTextMessage = 'Please fill in all text fields'
    }else if(this.createProductForm.get('pquantity')?.value<0){
      this.warningNumberMessage="Please only use positive numbers for price and quantity."
    }else if(this.createProductForm.get('pdescription')?.value===''){
      this.warningTextMessage = 'Please fill in all text fields'
    }else if(this.createProductForm.get('pprice')?.value<0){
      this.warningNumberMessage="Please only use positive numbers for price and quantity."
    }else if(this.createProductForm.get('pimage')?.value===''){
      this.warningTextMessage = 'Please fill in all text fields'
    }else{
      this.warningNumberMessage='';
      this.warningTextMessage='';
    this.prodService.createProduct(this.createProductForm.get('pname')?.value,this.createProductForm.get('pquantity')?.value,
          this.createProductForm.get('pdescription')?.value,this.createProductForm.get('pprice')?.value,
          this.createProductForm.get('pimage')?.value).subscribe(
            () => this.router.navigate(['home'])
          );
  }

}
}