import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/model/coupon';
import { CouponsService } from 'src/app/service/coupon.service';
import { CouponDetailsComponent } from '../coupon-details/coupon-details.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public id = 0;
  public coupon: Coupon | undefined;

  public constructor(
    private router: Router,
    private couponService: CouponsService,
    private couponDetails: CouponDetailsComponent) { }

    public getCouponById():void{
      this.router.navigate(["coupon-details/" 
      + this.id]);
    }

  ngOnInit() { }

  public testId(){
    console.log(this.id);
    this.getCouponById()
  }
}
