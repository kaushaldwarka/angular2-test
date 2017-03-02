import { Component, OnInit } from '@angular/core';
import {Brand} from "./brand";
import {BrandService} from "./brand.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
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
              private router: Router,
              private route: ActivatedRoute
  ) {  }


  getBrands(plid :string): void {
    this.brandService.getBrands(plid).subscribe(response=>{
      this.brands = response;
    });
  }

  selected(brand: Brand) {

    localStorage.setItem('brand_id', brand.bi.toString());
    localStorage.setItem('brand_name',brand.bn);
    // localStorage.getItem('key','value');
    this.router.navigate(['products', brand.bi]);
  }

  ngOnInit(): void {
    localStorage.getItem('product_line_id');
   // var product_line_name = localStorage.getItem('product_line_name');

    this.route.params.subscribe(
      params => {this.plid = +params['plid']}
    );
    this.getBrands(this.plid);

  }

}
