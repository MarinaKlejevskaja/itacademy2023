import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {TVShowsComponent} from "./tv-shows/tv-shows.component";
import {MyListComponent} from "./my-list/my-list.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tv-shows', component: TVShowsComponent},
  {path: 'my-list', component: MyListComponent},
  {path: '**',component: NotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
