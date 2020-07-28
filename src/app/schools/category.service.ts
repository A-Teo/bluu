import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ICategory, ISubcategory, ISchool } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoryUrl = 'api/categories/categories.json';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.categoryUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCategory(category: string): Observable<ICategory | undefined> {
    return this.getCategories()
      .pipe(
        map((categories: ICategory[]) => categories.find(c => c.slug === category))
      );
  }

  getSubcategories(category: string): Observable<ISubcategory[] | undefined> {
    return this.getCategories()
      .pipe(
        map((categories: ICategory[]) => categories.find(c => c.slug === category).subcategories)
      );
  }

  getSchools(category: string, subcategory: string): Observable<ISchool[] | undefined> {
    return this.getSubcategories(category)
      .pipe(
        map((subcategories: ISubcategory[]) => subcategories.find(sc => sc.slug === subcategory).schools)
      );
  }

  getSchool(category: string, subcategory: string, school: string): Observable<ISchool | undefined> {
    return this.getSchools(category, subcategory)
      .pipe(
        map((schools: ISchool[]) => schools.find(s => s.slug === school))
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
