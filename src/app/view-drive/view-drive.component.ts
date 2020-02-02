import { Component, OnInit } from '@angular/core';
import { D2serviceService } from '../d2service.service';
import{FormsModule} from '@angular/forms';

@Component({
  selector: 'app-view-drive',
  templateUrl: './view-drive.component.html',
  styleUrls: ['./view-drive.component.css']
})
export class ViewDriveComponent implements OnInit {

  constructor(private v:D2serviceService) { }
  
  data:any[]=[];
  ngOnInit() {
    this.user();
  }
  delete(x){
    //console.log("aaa");
     this.v.deletedata(x).subscribe((e:any)=>{this.user()});
  
  }
  search : any = 'all';
emp:any[];
user()
{
  this.v.viewdata().subscribe((e:any)=>
  this.data=e);

} 

}
