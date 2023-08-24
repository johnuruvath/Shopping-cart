import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get("https://fakestoreapi.com/products").pipe(map((res:any)=>{
      return res
    }))
  }
}
