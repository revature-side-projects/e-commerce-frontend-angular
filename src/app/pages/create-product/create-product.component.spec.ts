import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CreateProductComponent } from './create-product.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ProductService} from 'src/app/services/product.service';
import {UploadService} from 'src/app/services/upload.service';
import {AuthService} from "@auth0/auth0-angular";
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {of} from 'rxjs';
import { Auth0Client } from '@auth0/auth0-spa-js';

xdescribe('CreateProductComponent', () => {
  let component: CreateProductComponent;
  let fixture: ComponentFixture<CreateProductComponent>;
  let router: RouterTestingModule;
  let httpClient: HttpClientTestingModule;
  
  
  const authServiceSpy = jasmine.createSpyObj(AuthService, ['']);

  
  const productServiceSpy = jasmine.createSpyObj<ProductService>(['getProducts'])
  productServiceSpy.getProducts.and.returnValue(of([]));
  const uploadServiceSpy = jasmine.createSpyObj<UploadService>(['pushFile']);
  uploadServiceSpy.pushFile.and.returnValue(of());
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateProductComponent],
      providers: [{provide: UploadService, useValue: uploadServiceSpy},
      			  {provide: AuthService, useValue:authServiceSpy},
      			  {provide: ProductService, useValue: productServiceSpy},
      			  {provide: Router, useValue: router},
      			  {provide: HttpClient, useValue: httpClient}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

   
  
    fixture = TestBed.createComponent(CreateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
