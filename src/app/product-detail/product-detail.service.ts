import { Injectable } from '@angular/core';

import {Headers, Http, Response, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import { ProductDetail } from './product-detail';
import {AppConstant} from "../utils/app-constant";

@Injectable()
export class ProductDetailService {
  private baseUrl = 'product';
  private headers = new Headers({'X-AUTHORIZATION': AppConstant.AUTH_HEADER_VALUE});
  private options = new RequestOptions({headers: this.headers});

  constructor(private http: Http) {  }

  getProductDetail(pid : string): Observable<ProductDetail> {
    let url = AppConstant.BASE_URL+this.baseUrl;
    let params: URLSearchParams = new URLSearchParams();
    params.set('id',pid);
    params.set('pincode','122001');
    this.options.search = params;
    return this.http.get(url, this.options)
        .map((r : Response) => r.json() as ProductDetail);
    // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}

