import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {CategoryComponent} from './categories/category/category.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {TVShowsComponent} from './tv-shows/tv-shows.component';
import {MyListComponent} from './my-list/my-list.component';
import {MovieDetailsComponent} from './movies/movie-details/movie-details.component';
import { TrendingNowComponent } from './trending-now/trending-now.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    NotFoundComponent,
    TVShowsComponent,
    MyListComponent,
    MovieDetailsComponent,
    TrendingNowComponent,
    CategoriesListComponent,
    MoviesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
