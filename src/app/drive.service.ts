import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DriveService {
  constructor(private ht:HttpClient){ }

  setreg(x)
  {
  
   return this.ht.post("http://localhost:8080/DriveTrack/Register",x);
 
  }
}
