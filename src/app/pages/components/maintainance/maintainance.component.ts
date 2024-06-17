import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintainance',
  templateUrl: './maintainance.component.html',
  styleUrl: './maintainance.component.css'
})
export class MaintainanceComponent {

  constructor(private router: Router) { }
  onClick1(){
    this.router.navigate(['home'])
  }
  onClick2(){
    this.router.navigate(['ere*ferfe*'])
  }
}
