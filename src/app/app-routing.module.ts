import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [{ path: '', component:  ProductlistComponent },
{ path: 'user-details', component:UserdetailsComponent},
{ path: 'cart', component:CartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
