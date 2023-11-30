import {Component, OnInit} from '@angular/core';
import {MovieService} from "../service/movie.service";
import {MovieListItemModel} from "../model/movie-list-item.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: MovieListItemModel[] = [];

  constructor(private movieService: MovieService,
              private router: Router) {
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe(
      value => {
        this.movies = value;
      }
    )
  }

  onDetailsClick = (id: number) => {
      this.router.navigate(['/details', id])
  }
}
