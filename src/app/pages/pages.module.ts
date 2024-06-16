import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { VouchersComponent } from './components/vouchers/vouchers.component';
import { ReciptsComponent } from './components/recipts/recipts.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    VouchersComponent,
    ReciptsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    // VouchersComponent,
    // ReciptsComponent
  ]
})
export class PagesModule { }
