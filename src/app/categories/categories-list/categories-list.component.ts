import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {Category} from "../../types";
import {Observable} from "rxjs";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  categories?: Category[];

  constructor(private categoriesService: CategoriesService) {
  }
  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
  }
}
