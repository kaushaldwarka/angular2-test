import { Component, OnInit } from '@angular/core';
import {Brand} from "./brand";
import {BrandService} from "./brand.service";
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands: Brand[];
  plid: any;
  constructor(private brandService: BrandService,
              private route: ActivatedRoute
  ) {  }


  getBrands(plid :string): void {
    this.brandService.getBrands(plid).subscribe(response=>{
      console.log(response);
      this.brands = response;
    });
  }

  ngOnInit(): void {
    localStorage.getItem('product_line_id');
    var product_line_name = localStorage.getItem('product_line_name');
    console.log(product_line_name);

    this.route.params.subscribe(
      params => {this.plid = +params['plid']}
    );
    this.getBrands(this.plid);

  }

}
