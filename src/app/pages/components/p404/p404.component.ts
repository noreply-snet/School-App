import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p404',
  templateUrl: './p404.component.html',
  styleUrl: './p404.component.css'
})
export class P404Component {

  constructor(private router:Router){
  }

  onClick(){
    this.router.navigate([''])
  }

}
