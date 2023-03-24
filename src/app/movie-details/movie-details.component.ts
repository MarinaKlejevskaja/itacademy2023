import {Component} from '@angular/core';
import {MoviesService} from "../services/movies.service";
import {ActivatedRoute} from "@angular/router";
import {Movie} from "../movie";


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  movie?: Movie;

  constructor(private movieService: MoviesService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const movieId: any = this.activatedRoute.snapshot.params['id'];
    this.movie = this.movieService.getMovieById(movieId || '');
  }
}
