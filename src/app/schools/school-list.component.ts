import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ICategory, ISchool } from './category';
import { CategoryService } from './category.service';
import { ModalPayPickComponent } from '../bluu/modal-pay-pick/modal-pay-pick.component';

@Component({
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss']
})
export class SchoolListComponent implements OnInit {

  categoryObj: ICategory;
  category: string = '';
  subcategory: string = '';
  schools: ISchool[] = [];
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

        this.categoryService.getSchools(this.category, this.subcategory).subscribe({
          next: schools => {
            this.schools = schools;
            console.log('schools: ', schools);
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

  open(schoolTitle: string, schoolPrice: string) {
    const modalRef = this.modalService.open(ModalPayPickComponent);
    modalRef.componentInstance.subcategory = this.subcategory;
    modalRef.componentInstance.school = schoolTitle;
    modalRef.componentInstance.price = schoolPrice;
    modalRef.componentInstance.code = '5JKLM83 PRE';
    modalRef.componentInstance.category = this.categoryObj;
  }

}
