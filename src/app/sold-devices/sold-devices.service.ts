import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import {Observable} from "rxjs";
import {SoldDevices} from "./sold-devices";

@Injectable()
export class SoldDevicesService {

  private baseUrl = 'https://private-2af7fc-cashifyangularmobileapp.apiary-mock.com/featured-categories?pincode=122001';  // URL to web api

  constructor(private http: Http) { }

  getSoldDevices(): Observable<SoldDevices[]> {
    return this.http.get(this.baseUrl)
      .map((r : Response) => r.json().dt as SoldDevices[]);
  }

}
