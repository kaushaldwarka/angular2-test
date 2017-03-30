import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Search} from "./search";
import {SearchService} from "./search.service";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query:string = '';
  products: Search[];
  constructor(private productsService: SearchService,
              private route: ActivatedRoute,
              private router: Router) { }

  getProducts(query:string): void {
    this.productsService.getProducts(query).subscribe(response=>{
      this.products = response;
    });
  }

  searchProduct(){
    this.getProducts(this.query);
  }

  productSelected(product: Search) {
    localStorage.setItem('product_id', product.pi.toString());
    localStorage.setItem('product_name',product.pn);
    // localStorage.getItem('key','value');
    this.router.navigate(['product-detail', product.pi]);
  }
  ngOnInit() {
  }

}
