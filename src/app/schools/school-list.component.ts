import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISchool } from './category';
import { CategoryService } from './category.service';

@Component({
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss']
})
export class SchoolListComponent implements OnInit {

  category: string = '';
  subcategory: string = '';
  schools: ISchool[] = [];
  errorMessage: string = '';

  constructor(public route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.category = params.get('category');
        this.subcategory = params.get('subcategory');

        this.categoryService.getSchools(this.category, this.subcategory).subscribe({
          next: schools => {
            this.schools = schools;
            console.log('schools: ', schools);
          },
          error: err => this.errorMessage = err
        });
      }
    );
  }

}
