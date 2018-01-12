import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRouting } from './login.routing';
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LoginRouting,
    HttpClientModule,
    FlexLayoutModule
  ],
  declarations: [LoginComponent],
  providers: [HttpClient, LoginService ]
})
export class LoginModule { }
