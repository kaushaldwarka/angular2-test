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
import {SoldDevicesService} from "./sold-devices/sold-devices.service";
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { InnerFooterComponent } from './inner-footer/inner-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MyRouterComponent,
    BannerComponent,
    BrandComponent,
    CategoryComponent,
    FooterComponent,
    HeaderComponent,
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
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'product-detail',
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
    BrandService
  ],
  bootstrap: [MyRouterComponent]
})
export class AppModule { }
