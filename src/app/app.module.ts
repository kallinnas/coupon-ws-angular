import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AsideComponent } from './components/section/aside/aside.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateCouponComponent } from './components/create-coupon/create-coupon.component';
import { CouponDetailsComponent } from './components/coupon-details/coupon-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/section/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './components/section/layout/layout.component';
import { MenuComponent } from './components/section/menu/menu.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AsideComponent,
    CouponDetailsComponent,
    CreateCouponComponent,
    HeaderComponent,
    LayoutComponent,
    MenuComponent,
    SearchComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CouponDetailsComponent],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
