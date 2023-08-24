import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from '../apiservices.service';
import { CartservicesService } from '../cartservices.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productList: any;

  constructor(private api: ApiservicesService, private cartApi: CartservicesService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe(res => {
      this.productList = res;
      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price })
      });
    })
  }
  addtocart(item: any) {
    this.cartApi.addToCart(item);
  }
}
