import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SchoolRoutingModule } from './school-routing.module';
import { SchoolListComponent } from './school-list.component';
import { SchoolDetailComponent } from './school-detail.component';
import { CategoryComponent } from './category.component';
import { SubcategoryComponent } from './subcategory.component';
import { HeaderComponent } from '../bluu/header/header.component';
import { HeaderV2Component } from '../bluu/header-v2/header-v2.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SafePipe } from '../shared/safe.pipe'


@NgModule({
  declarations: [
    SchoolListComponent,
    SchoolDetailComponent,
    CategoryComponent,
    SubcategoryComponent,
    HeaderComponent,
    HeaderV2Component,
    FooterComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    NgbModule,
    SchoolRoutingModule
  ],
  exports: [
    HeaderComponent,
    HeaderV2Component,
    FooterComponent,
  ]
})
export class SchoolModule { }
