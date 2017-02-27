import { Component, OnInit } from '@angular/core';
import {Category} from "./category";
import {CategoryService} from "./category.service";
import {Router} from "@angular/router";
import {CategoryResponse} from "./category.response";
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  all_categories : CategoryResponse;
  constructor(private categoryService: CategoryService,
              private router: Router,
              private localStorageService: LocalStorageService
  ) {  }

  ngOnInit(): void {
    this.getCategories();
  }

  categorySelected(category: Category) {
    localStorage.setItem('product_line_id', category.pli.toString());
    localStorage.setItem('product_line_name',category.pln);
    // localStorage.getItem('key','value');
    this.router.navigate(['brands', category.pli]);
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(response=>{
      this.all_categories = response;
    });
  }

}
