import { IMovie } from './../core/interfaces/movie.model';
import * as MoviesActions from './movies.actions';

export const initialState = {
  movies: [
    {
      id: 1,
      type: 'series',
      title: 'Baba',
      year: 1972,
      star: 3
    },
    {
      id: 2,
      type: 'film',
      title: 'Kara Şovalye',
      year: 2008,
      star: 8
    },
    {
      id: 3,
      type: 'film',
      title: 'Breaking Bad',
      year: 2008,
      star: 8
    },
    {
      id: 4,
      type: 'film',
      title: 'Lorem ipsum',
      year: 2008,
      star: 9
    },
    {
      id: 5,
      type: 'series',
      title: 'Taht Oyunları',
      year: 2011,
      star: 5
    },
    {
      id: 6,
      type: 'series',
      title: 'Baba 2',
      year: 1974,
      star: 7
    },
    {
      id: 7,
      type: 'film',
      title: 'Ipsum dolar cosus',
      year: 2000,
      star: 2
    },
    {
      id: 8,
      type: 'film',
      title: 'Ipsum cosus dolar',
      year: 2013,
      star: 1
    },
    {
      id: 9,
      type: 'series',
      title: 'Black Mirror',
      year: 2011,
      star: 4
    },
    {
      id: 10,
      type: 'series',
      title: 'Vikings',
      year: 2013,
      star: 4
    },
    {
      id: 11,
      type: 'film',
      title: 'Green Book',
      year: 2013,
      star: 10
    },
    {
      id: 12,
      type: 'series',
      title: 'Bıçak Sırtı',
      year: 2000,
      star: 16
    }
  ],
  filterMovies: [],
  movieSortType: 'decreasing',
  genres: 'all'
};

export function moviesReducer(
  state = initialState,
  action: MoviesActions.MoviesActions) {

  switch (action.type) {
    case MoviesActions.LOAD_MOVIES:
      return {
        ...state,
        filterMovies: [...state.movies]
      };
    case MoviesActions.ADD_MOVIE:
      const newMovies = [...state.movies, action.payload];
      return {
        ...state,
        movies: newMovies,
        filterMovies: newMovies
      };
    case MoviesActions.DELETE_MOVIE:
      const nonDeleteMovies = state.movies.filter((movie) => {
        return movie.id !== action.payload;
      });
      return {
        ...state,
        movies: nonDeleteMovies,
        filterMovies: nonDeleteMovies
      };
    case MoviesActions.PLUS_MOVIE:
      const newPlusState = actionMovie(state.movies, action.payload, 'plus');
      const sortPlusState = sortMovies(newPlusState, state.movieSortType);
      return {
        ...state,
        movies: sortPlusState
      };
    case MoviesActions.MINUS_MOVIE:
      const newMinusState = actionMovie(state.movies, action.payload, 'minus');
      const sortMinusState = sortMovies(newMinusState, state.movieSortType);
      return {
        ...state,
        movies: sortMinusState
      };
    case MoviesActions.SORT_MOVIE:
      const sortMovieState = sortMovies(state.movies, action.sortType);
      return {
        ...state,
        movies: sortMovieState,
        movieSortType: action.sortType
      };
    case MoviesActions.GENRES_MOVIE:
      debugger;
      // state.filterMovies = [...state.movies];
      // console.log(action.genresMovie);
      // console.log(state.genres);
      return {
        ...state,
        filterMovies: genresMovie(state.movies, action.genresMovie),
      };
    default:
      return state;
  }
}

export function actionMovie(movies: IMovie[], movie: IMovie, action: string) {
  const filterMovies: IMovie[] = movies.filter(item => movie.id !== item.id);
  let newMovie: IMovie;

  switch (action) {
    case 'minus':
    newMovie = {...movie, star: movie.star - 1};
    break;
    case 'plus':
    newMovie = {...movie, star: movie.star + 1};
    break;
  }
  filterMovies.push(newMovie);

  return filterMovies;
}

export function sortMovies(movies: IMovie[], sortType: string) {

  let sortingMovies: IMovie[];

  switch (sortType) {
    case 'decreasing':
      return sortingMovies = movies.sort((a, b) =>  b.star - a.star);
    case 'increasing':
      return sortingMovies = movies.sort((a, b) =>  a.star - b.star);
    default:
      return movies;
  }
}

export function genresMovie(movies: IMovie[], genre: string) {
  return genre === 'film' || genre === 'series' ? movies.filter(item => item.type === genre) : movies;
}
