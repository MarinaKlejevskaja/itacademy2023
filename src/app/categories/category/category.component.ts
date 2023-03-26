import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {ActivatedRoute} from "@angular/router";
import {Category} from "../../types";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category?: Category = {
    id: 0,
    title: 'Test category',
  };
  categoryId: number = 0;

  constructor(private categoriesService: CategoriesService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.getCategoryId()
  }

  getCategoryId() {
    this.activatedRoute.params.subscribe(params => {
      this.categoryId = +params['id'];
      this.category = this.categoriesService.getCategoryById(this.categoryId);
    });
  }
}
