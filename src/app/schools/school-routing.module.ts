import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category.component';
import { SubcategoryComponent } from './subcategory.component';
import { SchoolListComponent } from './school-list.component';
import { SchoolDetailComponent } from './school-detail.component';


const routes: Routes = [
  { 
    path: 'escuelas', 
    component: CategoryComponent,
    children: [
      { path: ':category', component: SubcategoryComponent },
      { path: ':category/:subcategory', component: SchoolListComponent },
      { path: ':category/:subcategory/:school', component: SchoolDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
