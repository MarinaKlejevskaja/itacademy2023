import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../services/movies.service";

@Component({
  selector: 'app-trending-now',
  templateUrl: './trending-now.component.html',
  styleUrls: ['./trending-now.component.css']
})
export class TrendingNowComponent implements OnInit{
  movies: any = [];

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.movies = this.moviesService.getMovies();
  }
}
