import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyRouterComponent } from './my-router/my-router.component';
import { BannerComponent } from './banner/banner.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { SoldDevicesComponent } from './sold-devices/sold-devices.component';
import {RouterModule} from "@angular/router";
import {CategoryService} from "./category/category.service";
import {BrandService} from "./brand/brand.service";
import {ProductsService} from "./products/products.service";

import {SoldDevicesService} from "./sold-devices/sold-devices.service";
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { InnerFooterComponent } from './inner-footer/inner-footer.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import {ProductDetailService} from "./product-detail/product-detail.service";
import {SearchService} from "./search/search.service";
import {InnerHeaderComponent} from "./inner-header/inner-header.component";


@NgModule({
  declarations: [
    AppComponent,
    MyRouterComponent,
    BannerComponent,
    BrandComponent,
    CategoryComponent,
    FooterComponent,
    HeaderComponent,
    InnerHeaderComponent,
    MenuComponent,
    SearchComponent,
    SoldDevicesComponent,
    ProductsComponent,
    ProductDetailComponent,
    InnerFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
      // storageType: 'sessionStorage'
    }),
    RouterModule.forRoot([
      {
        path: 'home',
        component: AppComponent
      },
      {
        path: 'brands/:plid',
        component: BrandComponent
      },
      {
        path: 'products/:plid/:bid',
        component: ProductsComponent
      },
      {
        path: 'product-detail/:pid',
        component: ProductDetailComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
    ]),
  ],
  providers: [
      CategoryService,
      SoldDevicesService,
      BrandService,
      ProductsService,
      ProductDetailService,
      SearchService
  ],
  bootstrap: [MyRouterComponent]
})
export class AppModule { }
