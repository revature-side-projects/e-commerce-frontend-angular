import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent{

  selectedFiles!: FileList;
  currentFile!: File;
  selectedFile = null;
  changeImage = false;
  fileName: string = '';
  file: string = '';

  constructor(private uploadService: UploadService, private http: HttpClient) { }

  change(event:any){
    this.changeImage = true;
  }
  viewImage(){
    if(this.file == ''){
      console.log('File name is empty');
      return;
    }
    console.log('viewing' + this.file);
    window.open('https://revazon-image-bucket.s3.amazonaws.com/' + this.file);
  }

  changedImage(event:any){
    this.selectedFile = event.target.files[0];
  }
  upload(){ 
    if(this.fileName == ''){
      console.log('fileName cannot be empty');
      return;
    }
    this.uploadService.pushFile(this.currentFile, this.fileName).subscribe(event =>{
      console.log('uploading image: ' + this.fileName);
    });
  }
  selectFile(event:any){
    this.currentFile = event.target.files;
  }
  
}
