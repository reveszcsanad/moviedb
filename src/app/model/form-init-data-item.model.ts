import {GenreOptionItemModel} from "./genre-option-item.model";
import {RatingOptionItemModel} from "./rating-option-item.model";

export interface FormInitDataItemModel {
  genres: Array<GenreOptionItemModel>
  ratings: Array<RatingOptionItemModel>
}
