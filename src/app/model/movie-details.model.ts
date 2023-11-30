export interface MovieDetailsModel {
    id: number;
    title: string;
    director: string;
    year: number;
    genres?: Array<string>;
    rating: string;
    posterUrl?: string;
}
