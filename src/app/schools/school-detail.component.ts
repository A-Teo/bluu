import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ICategory, ISchool } from './category';
import { CategoryService } from './category.service';
import { ModalPayPickComponent } from '../bluu/modal-pay-pick/modal-pay-pick.component';

@Component({
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.scss']
})
export class SchoolDetailComponent implements OnInit {

  categoryObj: ICategory;
  category: string = '';
  subcategory: string = '';
  schoolSlug: string = '';
  school: ISchool = {} as any;
  errorMessage: string = '';
  
  constructor(
    public route: ActivatedRoute, 
    private categoryService: CategoryService,
    private modalService: NgbModal
  ) { }

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
        this.categoryService.getCategory(this.category).subscribe({
          next: category => {
            this.categoryObj = category;
          },
          error: err => this.errorMessage = err
        });
      }
    );
  }

  open() {
    const modalRef = this.modalService.open(ModalPayPickComponent);
    modalRef.componentInstance.subcategory = this.subcategory;
    modalRef.componentInstance.school = this.school.title;
    modalRef.componentInstance.price = this.school.price;
    modalRef.componentInstance.code = '5JKLM83 PRE';
    modalRef.componentInstance.category = this.categoryObj;
  }

}
