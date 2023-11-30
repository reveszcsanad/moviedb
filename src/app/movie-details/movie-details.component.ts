import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../service/movie.service";
import {MovieDetailsModel} from "../model/movie-details.model";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  movieDetails!: MovieDetailsModel;

  constructor(private activatedRoute: ActivatedRoute,
              private movieService: MovieService) {
    this.activatedRoute.paramMap.subscribe(
        params => {
          this.movieService.getMovieById(Number(params.get('id'))).subscribe(
              movie => {
                  this.movieDetails = movie
              }
          )
        }
    )
  }
}
