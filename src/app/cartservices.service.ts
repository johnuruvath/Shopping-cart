import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartservicesService {
  cartDataList:any=[];
  productList=new BehaviorSubject<any>([])

  constructor(private http:HttpClient) { }
  getProductData(){
    return this.productList.asObservable();
  }

  setProduct(product:any){
    this.cartDataList.push(...product)
    this.productList.next(product)
  }

  addToCart(product:any){
    this.cartDataList.push(product)
    this.productList.next(this.cartDataList)
    this.getTotalAmount();
    console.log(this.cartDataList);
    
  }

  getTotalAmount(){
    let grandTotal=0;
    this.cartDataList.map((a:any)=>{
      grandTotal+=a.total
    })
  }

  removeCartData(products:any){
    this.cartDataList.map((a:any,index:any)=>{
      if(products.id===a.id){
        this.cartDataList.splice(index,1)
      }
    })
  }

  removeAllCart(){
    this.cartDataList=[]
    this.productList.next(this.cartDataList)
  }
}
