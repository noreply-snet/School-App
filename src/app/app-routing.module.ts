import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { P404Component } from './pages/components/p404/p404.component';
import { VouchersComponent } from './pages/components/vouchers/vouchers.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', 
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'voucher',
        component: VouchersComponent,
      }
    ]
  },
  {
    path: '**',
    component: P404Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
