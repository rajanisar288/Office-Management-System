import { Component, VERSION, ViewChild, OnInit } from '@angular/core';
import { cardData } from '../../../../data/data'




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  data:any
  
  constructor(){    
    this.data = cardData

  }
  ngOnInit() {
   
  }
}



