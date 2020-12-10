import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coupon } from 'src/app/model/coupon';
import { CouponsService } from 'src/app/service/coupon.service';

@Component({
  selector: 'app-coupon-details',
  templateUrl: './coupon-details.component.html',
  styleUrls: ['./coupon-details.component.css']
})
export class CouponDetailsComponent implements OnInit {

  public coupon: Coupon = new Coupon();
  public role: string = '';

  public constructor(
    private aR: ActivatedRoute, 
    private couponsSer: CouponsService,
  ) { }

  public ngOnInit() {
    const id = +this.aR.snapshot.params.id;
    this.couponsSer.getCouponByIdRest(id)
      .subscribe(coupon => {
        this.coupon = coupon;
      }, err => {
        alert(this.aR.snapshot.params.id);
      });
  }

}
