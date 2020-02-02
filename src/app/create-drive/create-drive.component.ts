import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import { D2serviceService } from '../d2service.service';


@Component({
  selector: 'app-create-drive',
  templateUrl: './create-drive.component.html',
  styleUrls: ['./create-drive.component.css']
})
export class CreateDriveComponent implements OnInit {

  createdrive:FormGroup;
  constructor(private temp:D2serviceService) { }

  ngOnInit() {
    this.createdrive=new FormGroup({
      companyname: new FormControl('',[Validators.required]),
      resources:   new FormControl('',[Validators.required]),
      experience: new FormControl('',[Validators.required]),
      ctc:        new FormControl('',[Validators.required]),
      bond:       new FormControl('',[Validators.required]),
      followup:   new FormControl('',[Validators.required]),
      position: new FormControl('',[Validators.required]),
      criteria: new FormControl('',[Validators.required]),
      joining : new FormControl('',[Validators.required]),
      gst: new FormControl('',[Validators.required ,Validators.minLength(15)])
    });
  }
  
  tpo;
  adddata()
  {
    this.temp.setreg(this.createdrive.value).subscribe((e=>this.tpo=e));
    alert("Data submited");

  }
  
}
