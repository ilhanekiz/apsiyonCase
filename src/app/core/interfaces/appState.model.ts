import { IMovie } from './movie.model';

export interface IAppState {
  movies: IMovie[];
  filterMovies: IMovie[];
  movieSortType: string;
  genres: string;
}
