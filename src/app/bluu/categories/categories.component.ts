import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';

import { ICategory } from 'src/app/schools/category';
import { CategoryService } from 'src/app/schools/category.service';

declare const Flickity: any;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: ICategory[] = [];
  errorMessage: string = '';

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: categories => {
        this.categories = [...categories].concat(categories);
      },
      error: err => this.errorMessage = err
    });
  }

  @ViewChildren('slide') slide: QueryList<any>;

  ngAfterViewInit() {
    this.slide.changes.subscribe(t => {
      const flkty = new Flickity( '.cat-carousel', {
        "prevNextButtons": false,
        "pageDots": false, 
        "wrapAround": true,
        "imagesLoaded": true,
        "percentPosition": true,
        "autoPlay": true
      });
    })
  }

}
