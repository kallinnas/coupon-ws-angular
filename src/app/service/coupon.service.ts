import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Coupon } from '../model/coupon';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CouponsService {

  baseUrl = environment.baseUrl;
// private url = 'http://localhost:8080/api/';

  public constructor(private httpClient: HttpClient) { }

  public addCouponRest(coupon: Coupon): Observable<Coupon> {
    return this.httpClient.post<Coupon>(this.baseUrl + 'api/createCoupon', coupon, { withCredentials: false });
  }

  public getCouponByIdRest(id: number): Observable<Coupon> {
    return this.httpClient.get<Coupon>(this.baseUrl +
    'api/coupon/' + id, { withCredentials: false , responseType: 'json'});
  }

}
