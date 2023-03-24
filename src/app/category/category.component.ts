import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../services/categories.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any = [];

  constructor(private categoriesService: CategoriesService) {
  }
  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
  }
}
