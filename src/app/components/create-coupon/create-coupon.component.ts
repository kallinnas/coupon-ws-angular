import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/model/coupon';
import { CouponsService } from 'src/app/service/coupon.service';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent {

  public coupon = new Coupon();

  public constructor(private couponService: CouponsService) { }

  public addCoupon(): void {
    this.couponService.addCouponRest(this.coupon)
      .subscribe(coupon => {
        alert('Coupon id#' + coupon.id + " "
        + coupon.title + ' was created successfully!');
      }, err => {
        alert('Error: ' + err.message);
      });
  }

}
