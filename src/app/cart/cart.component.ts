import { Component, OnInit } from '@angular/core';
import { CartservicesService } from '../cartservices.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: any = []
  allProducts: any = 0


  constructor(private cartApi: CartservicesService) { }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res => {
      this.products = res;
      this.allProducts = this.cartApi.getTotalAmount();
    })
    this.display()
  }

  display(){
    this.cartApi.getProductData().subscribe(res => {
      this.products = res;
      this.allProducts = this.cartApi.getTotalAmount();
    })
  }

  removeProduct(item: any) {
    this.cartApi.removeCartData(item);
  }
 
}
