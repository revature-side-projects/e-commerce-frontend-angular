import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    fname: new FormControl('',[Validators.required, Validators.minLength(3)]),
    lname: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    email: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

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
  
  

  


