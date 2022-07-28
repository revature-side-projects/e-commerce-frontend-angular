import { ComponentFixture, TestBed } from '@angular/core/testing';

import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from 'src/app/services/auth.service';
import { RegisterComponent } from './register.component';
import {of} from 'rxjs';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
	const authServiceSpy = jasmine.createSpyObj<AuthService>(['register']);
	authServiceSpy.register.and.returnValue(of());
	
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [RouterTestingModule],
      providers: [{provide: AuthService, useValue: authServiceSpy}]
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
});
