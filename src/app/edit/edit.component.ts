import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { D2serviceService } from '../d2service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private a:ActivatedRoute,private s:D2serviceService) { }
  emp:any[];
  i;
  tpobj:any={};

  ngOnInit() {
this.i=this.a.snapshot.params['id'];

this.s.viewdata().subscribe((e:any)=>{
  this.emp=e
  for(let i=0;i<this.emp.length;i++)
{
  if(this.emp[i].did==this.i)
  {
    this.tpobj=this.emp[i];
    break
  }
}
});

  }tpo;
  edit()
{
  
  this.s.editdata(this.tpobj).subscribe();
  alert("data updated");
  console.log(this.tpobj);
}

}
