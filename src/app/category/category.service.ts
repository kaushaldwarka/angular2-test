import { Injectable } from '@angular/core';
import {Headers, Http, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import { Category } from './category';
import {CategoryResponse} from "./category.response";
import {AppConstant} from "../utils/app-constant";

@Injectable()
export class CategoryService {
// private baseUrl = 'https://private-2af7fc-cashifyangularmobileapp.apiary-mock.com/product-lines/all';  // URL to web api
  private baseUrl = 'product-lines/all?_v=0';
  // private headers = new Headers({'X-AUTHORIZATION': AppConstants.AUTH_HEADER_VALUE});
  // private options = new RequestOptions({headers: this.headers});
  private options = new RequestOptions({headers: this.getHeaders()});

  constructor(private http: Http) { }

  getCategories(): Observable<CategoryResponse> {
    let url = AppConstant.BASE_URL+this.baseUrl;
    let categories$ = this.http.get(url, this.options)
      .map((r : Response) => r.json() as CategoryResponse);
    return categories$;
  }

  private getHeaders(): Headers {
    let headers = new Headers();
    headers.append('X-AUTHORIZATION', AppConstant.AUTH_HEADER_VALUE);
    return headers;
  }

}
