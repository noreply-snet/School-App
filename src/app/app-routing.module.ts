import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { P404Component } from './pages/components/p404/p404.component';

const routes: Routes = [
  {
    path: '', 
    children: [
      {
        path: '',
        component: HomeComponent,
      }
    ]
  },
  {
    path: 'a',
    component: P404Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
