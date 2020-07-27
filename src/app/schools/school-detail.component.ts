import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISchool } from './category';
import { CategoryService } from './category.service';

@Component({
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.scss']
})
export class SchoolDetailComponent implements OnInit {

  category: string = '';
  subcategory: string = '';
  schoolSlug: string = '';
  school: ISchool = {} as any;
  errorMessage: string = '';
  
  constructor(public route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.category = params.get('category');
        this.subcategory = params.get('subcategory');
        this.schoolSlug = params.get('school');

        this.categoryService.getSchool(this.category, this.subcategory, this.schoolSlug).subscribe({
          next: school => {
            this.school = school;
            console.log('school: ', school);
          },
          error: err => this.errorMessage = err
        });
      }
    );
  }

}
