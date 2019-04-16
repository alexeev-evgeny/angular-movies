import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './container/app.container';
import { MoviesList } from './components/moviesList.component';
import { MoviesListItem } from './components/moviesListItem.component';

import moviesStore from './store/movies.store';

@NgModule({
declarations: [
    AppComponent,
    MoviesList,
    MoviesListItem
],
imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(moviesStore)
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
