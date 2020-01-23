import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDriveComponent } from './create-drive/create-drive.component';
import { ViewDriveComponent } from './view-drive/view-drive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import {Routes,RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {HttpClientModule} from '@angular/common/http';
import { EditComponent } from './edit/edit.component';

const appRoutes:Routes=[
  {path:'create-drive',component:CreateDriveComponent},
  {path:'view-drive',component:ViewDriveComponent},
  {path:'xyz/:id',component:EditComponent,pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'reg', component:RegistrationComponent},
  
  {path:"",redirectTo:'/reg',pathMatch:"full"}
  
]

@NgModule({
  declarations: [
    AppComponent,
    CreateDriveComponent,
    ViewDriveComponent,
    LoginComponent,
    RegistrationComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,HttpClientModule,
    MaterialModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
