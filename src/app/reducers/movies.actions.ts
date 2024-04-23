import { Action } from '@ngrx/store';
import { IMovie } from '../core/interfaces/movie.model';

export const ADD_MOVIE = 'ADD_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const PLUS_MOVIE = 'PLUS_MOVIE';
export const MINUS_MOVIE = 'MINUS_MOVIE';
export const SORT_MOVIE = 'SORT_MOVIE';
export const GENRES_MOVIE = 'GENRES_MOVIE';
export const LOAD_MOVIES = 'LOAD_MOVIES';


export class AddMovie implements Action {
  readonly type = ADD_MOVIE;
  constructor(public payload: IMovie) {}
}

export class DeleteMovie implements Action {
  readonly type = DELETE_MOVIE;
  constructor(public payload: number) {}
}

export class PlusMovie implements Action {
  readonly type = PLUS_MOVIE;
  constructor(public payload: IMovie) {}
}

export class MinusMovie implements Action {
  readonly type = MINUS_MOVIE;
  constructor(public payload: IMovie) {}
}

export class SortMovie implements Action {
  readonly type = SORT_MOVIE;
  constructor(public sortType: string) {}
}

export class GenresMovie implements Action {
  readonly type = GENRES_MOVIE;
  constructor(public genresMovie: string) {}
}

export class LoadMovies implements Action {
  readonly type = LOAD_MOVIES;
}

export type MoviesActions = AddMovie | DeleteMovie | PlusMovie | MinusMovie | SortMovie | GenresMovie | LoadMovies;
