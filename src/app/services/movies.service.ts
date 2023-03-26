import {Injectable} from '@angular/core';
import {moviesList} from "../shared/data";
import {Category, Movie} from "../types";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  getMovies():Movie[] {
    return moviesList.movies;
  }

  getMovieById(movieId: any):Movie {
    return moviesList.movies.filter(movie => movie.id.toString() === movieId.toString())[0];
  }

  getMoviesByCategory(categoryId: number):Movie[]{
    return moviesList.movies.filter(movie => {
      return categoryId === movie.categoryId;
    });
  }
}
