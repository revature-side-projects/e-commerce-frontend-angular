import { HttpClient } from '@angular/common/http';
import { UploadService } from 'src/app/services/upload.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from "@auth0/auth0-angular";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  selectedFiles!: FileList;
  currentFile!: File;
  selectedFile = null;
  changeImage = false;
  fileName: string = '';
  file: string = '';
  imageSelected = false;
  warningTextMessage: string = '';
  warningNumberMessage: string = '';
  modalVisibility: string = '';

  constructor(
    private prodService: ProductService,
    private router: Router,
    private uploadService: UploadService,
    private http: HttpClient,
    private auth: AuthService
  ) { }

  /**
   * Must be authorized to access this component
   */
  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe({
      next: (data) => {
        if (!data) {
          this.router.navigate(['/']);
        }
      },
    });
  }


  createProductForm = new FormGroup({
    pname: new FormControl(''),
    pquantity: new FormControl(''),
    pdescription: new FormControl(''),
    pprice: new FormControl(''),
    pimage: new FormControl(''),
  });

  change(_event: any) {
    this.changeImage = true;
  }

  /**
   * 
   * Loads image from public s3 bucket
   */
  viewImage() {
    if (this.file == '') {
      console.log('File name is empty');
      return;
    }
    console.log('viewing' + this.file);
    window.open('https://revazon-image-bucket.s3.amazonaws.com/' + this.file);
  }

  /**
   * Capture image change
   * @param event 
   */
  changedImage(event: any) {
    this.selectedFile = event.target.files[0];
  }

  /**
   * Uploads file to S3 
   *
   */
  upload() {
    if (this.fileName == '') {
      console.log('fileName cannot be empty');
      return;
    }
    this.currentFile = this.selectedFiles[0];
    this.uploadService.pushFile(this.currentFile).subscribe((event) => {
      console.log(event);
      this.modalVisibility = 'none';
    });
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }
  updateImage(url: string) {
    this.file = 'https://revazon-image-bucket.s3.amazonaws.com/' + url;
  }

  /**
   * Submitting the new product and validating input
   */
  onSubmit() {
    if (this.createProductForm.get('pname')?.value === '') {
      this.warningTextMessage = 'Please fill in all text fields';
    } else {
      // @ts-ignore
      if (this.createProductForm.get('pquantity')?.value < 0) {
        this.warningNumberMessage =
          'Please only use positive numbers for price and quantity.';
      } else if (this.createProductForm.get('pdescription')?.value === '') {
        this.warningTextMessage = 'Please fill in all text fields';
      } else {
        // @ts-ignore
        if (this.createProductForm.get('pprice')?.value < 0) {
          this.warningNumberMessage =
            'Please only use positive numbers for price and quantity.';
        } else if (this.createProductForm.get('pimage')?.value === '') {
          this.warningTextMessage = 'Please fill in all text fields';
        } else {
          this.warningNumberMessage = '';
          this.warningTextMessage = '';
          // @ts-ignore
          this.prodService
            .createProduct(
              this.createProductForm.get('pname')?.value as string,
              this.createProductForm.get('pquantity')?.value as unknown as number,
              this.createProductForm.get('pdescription')?.value as string,
              this.createProductForm.get('pprice')?.value as unknown as number,
              this.createProductForm.get('pimage')?.value as string
            )
            .subscribe(() => this.router.navigate(['']));
        }
      }
    }
  }

  openPopup() {
    this.modalVisibility = 'block';
  }

  closePopup() {
    this.modalVisibility = 'none';
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
  }
}
