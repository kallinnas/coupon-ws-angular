import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CouponDetailsComponent } from './components/coupon-details/coupon-details.component';
import { CreateCouponComponent } from './components/create-coupon/create-coupon.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: 'home', component: SearchComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'create-coupon', component: CreateCouponComponent },
  { path: 'coupon-details/:id', component: CouponDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
