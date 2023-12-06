import {Component, OnInit} from '@angular/core';
import {GenreOptionItemModel} from "../model/genre-option-item.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {RatingOptionItemModel} from "../model/rating-option-item.model";
import {MovieService} from "../service/movie.service";
import {Router} from "@angular/router";
import {FormInitDataItemModel} from "../model/form-init-data-item.model";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
    selector: 'app-movie-form',
    templateUrl: './movie-form.component.html',
    styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

    form: FormGroup;
    genres: Array<GenreOptionItemModel> = [];
    ratings: Array<RatingOptionItemModel> = [];

    constructor(private formBuilder: FormBuilder,
                private movieService: MovieService,
                private router: Router) {
        this.form = this.formBuilder.group({
            title: [null, Validators.required],
            director: [null, Validators.required],
            year: [null, [Validators.required, Validators.max(2023), Validators.min(1895)]],
            genres: [null, [Validators.required, this.customGenreValidator]],
            rating: [null, Validators.required],
            posterUrl: [null]
        })
    }

    ngOnInit() {
        this.movieService.fetchFormInitData().subscribe(
            (initData: FormInitDataItemModel) => {
                this.genres = initData.genres;
                this.ratings = initData.ratings;
            },
            error => console.warn(error)
        )
    }

    customGenreValidator(control: FormControl): { tooMany: boolean } | null {
        let result = null;
        if (control.value) {
            let selectedValues: Array<string> = control.value;
            if (selectedValues.length > 3) {
                result = {tooMany: true};
            }
        }
        return result;
    }

    onSubmit() {
        this.movieService.createMovie(this.form.value).subscribe(
            () => this.router.navigate(['movies']),
            error => {
                if (error instanceof HttpErrorResponse && error.status === 400) {
                    for (let validationError of error.error.fieldErrors) {
                        const formControl = this.form.get(validationError.field)
                        if (formControl) {
                            formControl.setErrors({serverError: validationError.message})
                        }
                    }
                }
            }
        )
    }
}
