import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class D2serviceService {
  constructor(private ht:HttpClient){ }

  setreg(x)
  {
  
   return this.ht.post("http://localhost:8080/DriveTrack/Create",x);
 
  }
  viewdata()
  {
    return this.ht.get("http://localhost:8080/DriveTrack/views"); 
  }
  deletedata(y)
{
return this.ht.post("http://localhost:8080/DriveTrack/DeleteData",y);
}
editdata(z)
{
  return this.ht.post("http://localhost:8080/DriveTrack/edit",z);
}
}
