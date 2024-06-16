import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { VouchersComponent } from './components/vouchers/vouchers.component';
import { ReciptsComponent } from './components/recipts/recipts.component';
import { RouterModule } from '@angular/router';
import { P404Component } from './components/p404/p404.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NgxPrintModule } from 'ngx-print';



@NgModule({
  declarations: [
    HomeComponent,
    VouchersComponent,
    ReciptsComponent,
    P404Component,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPrintModule
  ],
  exports: [
    HomeComponent,
    P404Component,
    // VouchersComponent,
    // ReciptsComponent
  ]
})
export class PagesModule { }
