import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileComponent } from './user-profile.component';
import {UserService} from 'src/app/services/user.service';
import {of} from 'rxjs';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async () => {
	const userServiceSpy = jasmine.createSpyObj<UserService>(['findUserById']);
	userServiceSpy.findUserById.and.returnValue(of());
	
    await TestBed.configureTestingModule({

      declarations: [ UserProfileComponent ],
      providers: [{provide: UserService, useValue: userServiceSpy}]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
