import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TVShowsComponent } from './tv-shows/tv-shows.component';
import { MyListComponent } from './my-list/my-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    NotFoundComponent,
    TVShowsComponent,
    MyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
