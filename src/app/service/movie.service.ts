import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {MovieListItemModel} from "../model/movie-list-item.model";
import {Observable} from "rxjs";
import {MovieDetailsModel} from "../model/movie-details.model";
import {FormInitDataItemModel} from "../model/form-init-data-item.model";
import {MovieFormDataModel} from "../model/movie-form-data.model";

const BASE_URL = 'http://localhost:8080/api/movies';

@Injectable({providedIn: 'root'})
export class MovieService {
    constructor(private http: HttpClient) {
    }

    getMovies = (): Observable<MovieListItemModel[]> => {
        return this.http.get<MovieListItemModel[]>(BASE_URL);
    }

    getMovieById = (id: number): Observable<MovieDetailsModel> => {
        return this.http.get<MovieDetailsModel>(`${BASE_URL}/${id}`);
    }

    fetchFormInitData(): Observable<FormInitDataItemModel> {
        return this.http.get<FormInitDataItemModel>(`${BASE_URL}/formData`);
    }

    createMovie(data: MovieFormDataModel): Observable<any> {
        return this.http.post(BASE_URL, data);
    }
}
