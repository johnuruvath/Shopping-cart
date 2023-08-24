import { Component, OnInit } from '@angular/core';
import { CartservicesService } from '../cartservices.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalItemNumber:number=0;
  
  constructor(private cartApi:CartservicesService){}
 
 
  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res=>{
      this.totalItemNumber=res.length;
    })
  }

}
