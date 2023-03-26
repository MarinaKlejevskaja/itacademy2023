import { Injectable } from '@angular/core';
import {moviesList} from "../shared/data";
import {Category} from "../types";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  getCategories() : Category[]{
    return moviesList.categories;
  }

  getCategoryById(categoryId: number){
    return moviesList.categories.filter(category => category.id === categoryId)[0];
  }
}
