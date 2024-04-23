import { Injectable } from '@angular/core';
import { IMovie } from '../interfaces/movie.model';
import { ITheme } from '../interfaces/theme.model';
@Injectable({
  providedIn: 'root'
})

export class StoreService {
  movies: IMovie[] = [
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
  ];
  filterMovies: IMovie[] = [];
  genresMovies: IMovie[] = [];
  collectionSize = this.movies.length;
  pageSize = 5;
  page = 1;
  sortType = 'decreasing';
  genresSelected = 'all';

  theme: ITheme = {
    isPrimary: true,
    isGray: false,
    isBlue: false
  };

  constructor() {}
}
