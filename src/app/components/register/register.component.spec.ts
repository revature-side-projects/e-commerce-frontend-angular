import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
	  imports: [HttpClientTestingModule, RouterTestingModule,FormsModule, ReactiveFormsModule],
      declarations: [ RegisterComponent ]
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  //Component Testing  =================
  
  it('should have a input field for first name', () => {
	
	
  });
	
  
  it('should have a field for input password', () => {

  })
  
  it('should have  field for last name', () =>{
	
	
  });
	
  
   
  
});
