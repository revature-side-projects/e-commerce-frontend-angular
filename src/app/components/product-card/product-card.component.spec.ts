import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';


import {Router} from '@angular/router';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {AppComponent} from 'src/app/app.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ProductService} from 'src/app/services/product.service';
import { AuthService } from '@auth0/auth0-angular';

import {of} from 'rxjs';



describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
	
    await TestBed.configureTestingModule({
     
      
      


    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
