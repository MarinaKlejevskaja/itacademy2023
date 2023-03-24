import {Injectable} from '@angular/core';
import {moviesList} from "../shared/data";
import {Movie} from "../movie";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  getMovies() {
    return moviesList.movies;
  }

  getMovieById(movieId: any):Movie {
    return moviesList.movies.filter(movie => movie.id.toString() === movieId.toString())[0];
  }

  getMoviesByCategory(categoryId: number) {
    return moviesList.movies.filter(movie => movie.categoryId === categoryId);
  }
}
