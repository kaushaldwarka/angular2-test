import { Injectable } from '@angular/core';

import {Headers, Http, Response, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import { Search } from './search';
import {AppConstant} from "../utils/app-constant";

@Injectable()
export class SearchService {
  // private baseUrl = 'https://private-2af7fc-cashifyangularmobileapp.apiary-mock.com/brands?_v=1&plid=20&srt=1';  // URL to web api
  private baseUrl = 'product/product-list';
  private headers = new Headers({'X-AUTHORIZATION': AppConstant.AUTH_HEADER_VALUE});
  private options = new RequestOptions({headers: this.headers});

  constructor(private http: Http) {  }

  getProducts(query:string): Observable<Search[]> {
    let url = AppConstant.BASE_URL+this.baseUrl;
    let params: URLSearchParams = new URLSearchParams();
    params.set('c_id',null);
    params.set('b_id',null);
    params.set('ps','10');
    params.set('os','0');
    params.set('query',query);
    this.options.search = params;
    return this.http.get(url, this.options)
        .map((r : Response) => r.json().dt as Search[]);
    // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}

