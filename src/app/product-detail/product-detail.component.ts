import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {ProductDetail} from "./product-detail";
import {ProductDetailService} from "./product-detail.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pid: any;
  product: ProductDetail;
  constructor(private productsDetailService: ProductDetailService,
              private route: ActivatedRoute,
              private router: Router
  ) {  }


  getProductDetail(pid :string): void {
    this.productsDetailService.getProductDetail(pid).subscribe(response=>{
      console.log(response);
      this.product = response;
    });
  }

  productSelected(productDetail: ProductDetail) {
    // localStorage.setItem('product_id', product.pi.toString());
    // localStorage.setItem('product_name',product.pn);
    // this.router.navigate(['product-detail', product.pi]);
  }

  ngOnInit(): void {
    this.route.params.subscribe(
        params => {this.pid = +params['pid']}
    );
    this.getProductDetail(this.pid);

  }

}

