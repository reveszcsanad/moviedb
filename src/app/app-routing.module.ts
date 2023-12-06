import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieListComponent} from "./movie-list/movie-list.component";
import {MovieDetailsComponent} from "./movie-details/movie-details.component";
import {MovieFormComponent} from "./movie-form/movie-form.component";

const routes: Routes = [
  {path: '', component: MovieListComponent},
  {path: 'movies', component: MovieListComponent},
  {path: 'details/:id', component: MovieDetailsComponent},
  {path: 'movie-form', component:MovieFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
