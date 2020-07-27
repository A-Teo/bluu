import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISubcategory } from './category';
import { CategoryService } from './category.service';

@Component({
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {

  category: string = '';
  subcategories: ISubcategory[] = [];
  errorMessage: string = '';

  constructor(public route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.category = params.get('category');

        this.categoryService.getSubcategories(this.category).subscribe({
          next: subcategories => {
            this.subcategories = subcategories;
            console.log('subs: ', subcategories);
          },
          error: err => this.errorMessage = err
        });
      }
    );
  }

}
