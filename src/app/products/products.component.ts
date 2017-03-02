import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Product} from "./product";
import {ProductsService} from "./products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  plid: any;
  bid:any;
  products: Product[];
  constructor(private productsService: ProductsService,
              private route: ActivatedRoute
  ) {  }


  /*getProducts(plid :string,bid:string): void {
    this.productsService.getProducts(plid,bid).subscribe(response=>{
      console.log(response);
      this.products = response;
    });
  }*/

  /*selected(product: Product) {
    localStorage.setItem('product_id', product.pi.toString());
    localStorage.setItem('product_name',product.pn);
    // localStorage.getItem('key','value');
    // this.router.navigate(['products', this.plid,brand.bi]);
  }*/

  ngOnInit(): void {
    localStorage.getItem('product_line_id');
    this.plid = localStorage.getItem('product_line_id');

    this.route.params.subscribe(
        params => {this.bid = +params['bid']}
    );
    console.log(this.plid);
    // this.getProducts(this.plid,this.bid);

  }

}
