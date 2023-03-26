import {Component, Input,  OnInit} from '@angular/core';
import {Movie} from "../../types";
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  //receive category id from parent component
  @Input() categoryId?: number;
  moviesList: Movie[] = [];


  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    if (this.categoryId) {
      this.moviesList = this.moviesService.getMoviesByCategory(this.categoryId);
    }
  }
}
