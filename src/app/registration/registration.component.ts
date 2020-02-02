import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DriveService } from '../drive.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
userform:FormGroup;
countries=["India","USA","Germany","Italy","France"];

  constructor(private temp:DriveService) { }

  ngOnInit() {
    this.userform=new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(3)]),
      pass:new FormControl('',[Validators.required,Validators.minLength(5)]),
      mail:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9]+@[a-z]+[.][a-z]+")]),
      gender:new FormControl(),
      country:new FormControl(),
      mobile: new FormControl('',[Validators.required]),
    });
  }
  tpo;
  adddata()
  {
    this.temp.setreg(this.userform.value).subscribe((e=>this.tpo=e));
    alert("Data submited");

  }

}
