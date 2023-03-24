import { Injectable } from '@angular/core';
import {moviesList} from "../shared/data";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  getCategories() {
    return moviesList.categories;
  }

  getCategoryById(categoryId: number) {
    return moviesList.categories.filter(category => category.id === categoryId);
  }
}
