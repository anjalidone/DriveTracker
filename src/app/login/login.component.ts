import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import {Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private route:Router) { }

  ngOnInit() {
    this.registerForm= new FormGroup({
      email: new FormControl ('', [Validators.required,Validators.pattern("[a-zA-Z0-9]+@[a-z]{5}+[.][a-z]{3}")]),
      password: new FormControl ('', [Validators.required])
  
    })
  }
  onSubmit()
  {
   this.route.navigate(['/view-drive']);

  }

}
