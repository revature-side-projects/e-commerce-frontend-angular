import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { SearchbarComponent } from './searchbar.component';
import {AppComponent} from 'src/app/app.component';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {ProductService} from 'src/app/services/product.service';
import {of} from 'rxjs';

describe('SearchbarComponent', () => {
  let component: SearchbarComponent;
  let fixture: ComponentFixture<SearchbarComponent>;
  let appComponent: AppComponent;
  let formBuilder: FormBuilder;
  let router: RouterTestingModule;
  
  beforeEach(async () => {
	const productServiceSpy =  jasmine.createSpyObj<ProductService>(['getSearchProducts']);
	productServiceSpy.getSearchProducts.and.returnValue(of([]));
	

    await TestBed.configureTestingModule({
      declarations: [SearchbarComponent, AppComponent],
      imports:[RouterTestingModule],
      providers: [AppComponent,  FormBuilder,
	    {provide: ProductService, useValue: productServiceSpy},
	    {provide: Router, useValue: router},
	   // {provide: AppComponent, useValue: appComponentSpy},
	   // {provide: FormBuilder, useValue: formBuilderSpy}
	  ],
	  schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

	appComponent = TestBed.inject(AppComponent);
	formBuilder = TestBed.inject(FormBuilder);
	
    fixture = TestBed.createComponent(SearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    router = TestBed.inject(RouterTestingModule);
    
    
  });
  

  it('should create', () => {
	
    expect(component).toBeTruthy();
    expect(component.searchTerm).toEqual('');
    
  });
  
  
  
//cannot test onsubmit router 
  
});
