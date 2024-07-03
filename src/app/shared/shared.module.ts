import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoucherComponent } from './components/voucher/voucher.component';



@NgModule({
  declarations: [
    VoucherComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    VoucherComponent,
  ]
})
export class SharedModule { }
