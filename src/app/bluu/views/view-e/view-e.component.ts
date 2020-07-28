import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICategory } from 'src/app/schools/category';
import { CategoryService } from 'src/app/schools/category.service';

@Component({
  templateUrl: './view-e.component.html',
  styleUrls: ['./view-e.component.css']
})
export class ViewEComponent implements OnInit {
  
  categories: ICategory[] = [];
  errorMessage: string = '';
  
  constructor(public route: ActivatedRoute, private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: categories => {
        this.categories = categories;
      },
      error: err => this.errorMessage = err
    });
  }

}
