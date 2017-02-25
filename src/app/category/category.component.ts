import { Component, OnInit } from '@angular/core';
import {Category} from "./category";
import {CategoryService} from "./category.service";
import {Router} from "@angular/router";
import {CategoryResponse} from "./category.response";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  all_categories : CategoryResponse;
  constructor(private categoryService: CategoryService,
              private router: Router
  ) {  }

  ngOnInit(): void {
    this.getCategories();
  }

  categorySelected(category: Category) {
    this.router.navigate(['brands', category.pli]);
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(response=>{
      this.all_categories = response;
    });
  }

}
