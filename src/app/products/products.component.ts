import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
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
  bid: any;
  products: Product[];
  constructor(private productsService: ProductsService,
              private route: ActivatedRoute,
              private router: Router
  ) {  }


  getProducts(plid :string,bid:string): void {
    this.productsService.getProducts(plid,bid).subscribe(response=>{
      this.products = response;
    });
  }

  productSelected(product: Product) {
    localStorage.setItem('product_id', product.pi.toString());
    localStorage.setItem('product_name',product.pn);
    // localStorage.getItem('key','value');
     this.router.navigate(['product-detail', product.pi]);
  }

  getImageUrl(product: Product): string{
    var imageUrl = (product.pin == undefined || product.pin == '' ) ? 'http://s3.cashify.in/cashify/ng/not-available.png' : 'http://s3t.reglobe.in'+product.piu+'thumb/hdpi/'+product.pin;
    return imageUrl;
  }

  ngOnInit(): void {
    localStorage.getItem('product_line_id');
    //this.plid = localStorage.getItem('product_line_id');

    this.route.params.subscribe(
        params => {this.plid = +params['plid'],this.bid = +params['bid']}
    );
     this.getProducts(this.plid,this.bid);

  }

}
