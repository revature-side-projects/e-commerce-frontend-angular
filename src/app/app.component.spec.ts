import { TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core/';

describe('AppComponent', () => {

  
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{
	        provide: AppComponent, useValue: {}
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'E-Commerce Client'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('E-Commerce Client');
  });

  it('should have as searchProducts [] ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect (app.searchProducts).toEqual([]);
    
  });
  
  it(`should have as search 'help'`, ()=>{
	const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect (app.search).toEqual('help');
  
	
  });
  
 })