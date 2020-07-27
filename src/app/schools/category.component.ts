import { Component, OnInit } from '@angular/core';

import { ICategory } from './category';
import { CategoryService } from './category.service';

@Component({
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: ICategory[] = [];
  errorMessage: string = '';

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: categories => {
        this.categories = categories;
      },
      error: err => this.errorMessage = err
    });
  }

}
