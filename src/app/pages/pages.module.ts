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
import { MaintainanceComponent } from './components/maintainance/maintainance.component';
import { HeaderComponent } from './components/header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { SharedModule } from '../shared/shared.module';

import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ProductsService } from './services/products.service';
import { ImportsModule } from '../core/Import/importModules';

@NgModule({
  declarations: [
    HomeComponent,
    VouchersComponent,
    ReciptsComponent,
    P404Component,
    LoginComponent,
    SignupComponent,
    MaintainanceComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPrintModule,
    MatButtonModule,
    MatMenuModule,
    SharedModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    ImportsModule
  ],
  exports: [
    HomeComponent,
    P404Component,
  ],
  providers:[
   ProductsService
  ]
})
export class PagesModule { }
