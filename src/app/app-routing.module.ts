import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {TVShowsComponent} from "./tv-shows/tv-shows.component";
import {MyListComponent} from "./my-list/my-list.component";
import {MovieDetailsComponent} from "./movies/movie-details/movie-details.component";
import {FilterMovieAccessGuard} from "./guards/filter-movie-access.guard";
import {CategoryComponent} from "./categories/category/category.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tv-shows', component: TVShowsComponent},
  {path: 'my-list', component: MyListComponent},
  { path: 'movie/:id', component: MovieDetailsComponent, canActivate: [FilterMovieAccessGuard] },
  {path: 'categories/:id', component: CategoryComponent},
  {path: '**',component: NotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
