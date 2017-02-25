import { Injectable } from '@angular/core';

import {Headers, Http, Response, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import { Brand } from './brand';
import {AppConstant} from "../utils/app-constant";

@Injectable()
export class BrandService {

  // private baseUrl = 'https://private-2af7fc-cashifyangularmobileapp.apiary-mock.com/brands?_v=1&plid=20&srt=1';  // URL to web api
  private baseUrl = 'brands?_v=0';
  private headers = new Headers({'X-AUTHORIZATION': AppConstant.AUTH_HEADER_VALUE});
  private options = new RequestOptions({headers: this.headers});

  constructor(private http: Http) {  }

  getBrands(plid : string): Observable<Brand[]> {
    let url = AppConstant.BASE_URL+this.baseUrl;
    let params: URLSearchParams = new URLSearchParams();
    params.set('plid',plid);
    this.options.search = params;
    return this.http.get(url, this.options)
      .map((r : Response) => r.json().dt as Brand[]);
    // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
