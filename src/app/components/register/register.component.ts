import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new UntypedFormGroup({
    fname: new UntypedFormControl('',[ Validators.required, Validators.minLength(3)]),
    lname: new UntypedFormControl('',[Validators.required, Validators.minLength(4)]),
    email: new UntypedFormControl('', Validators.required),
    password: new UntypedFormControl('', [Validators.required, Validators.minLength(6)]), 
  });
  get firstName(): any {
    return this.registerForm.get('fname');
} 
get lastName(): any {
  return this.registerForm.get('lname');
} 

get password(): any {
  return this.registerForm.get('password');
} 


  

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(): void {
    this.authService.register(this.registerForm.get('fname')?.value, this.registerForm.get('lname')?.value, this.registerForm.get('email')?.value, this.registerForm.get('password')?.value).subscribe(
      () => console.log("New user registered"),
      (err) => console.log(err),
      () => this.router.navigate(['login'])
    );
  }

}
