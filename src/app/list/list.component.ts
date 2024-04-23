// import { movies } from './../reducers/movies.reducer';
import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../core/interfaces/movie.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { StoreService } from '../core/services/store.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as MoviesActions from '../reducers/movies.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  collectionSize: number;
  // pageSize = this.storeService.pageSize;
  // page = this.storeService.page;
  // filterMovies: IMovie[];
  movies$: Observable<{ filterMovies: IMovie[]}>;

  constructor(public dialog: MatDialog, private storeService: StoreService, private store: Store<{ state: { filterMovies: IMovie[] } }>) {
    // if (this.storeService.genresSelected === 'all') {
    //   this.storeService.movies.sort((a, b) =>  b.star - a.star);
    //   this.filterMovies = this.storeService.movies.slice(0, this.storeService.pageSize);
    // } else {
    //   this.handleGenresSorting(this.storeService.genresSelected);
    // }

  }

  ngOnInit(): void {
    this.movies$ = this.store.select('state');
    this.store.select('state').subscribe((state) => {
      console.log(state.filterMovies);
    });
    // this.moviesLoad();
  }

  moviesLoad() {
    // this.filterMovies = this.movies$;
    // this.collectionSize = this.movies$.length;
  }

  handleSorting(sortType: string) {

    this.store.dispatch(new MoviesActions.SortMovie(sortType));

    // if (this.storeService.genresSelected === 'all') {
    //   if (sortType === 'decreasing') {
    //     this.storeService.movies.sort((a, b) =>  b.star - a.star);
    //   } else {
    //     this.storeService.movies.sort((a, b) =>  a.star - b.star);
    //   }
    // } else {
    //   if (sortType === 'decreasing') {
    //     this.storeService.genresMovies.sort((a, b) =>  b.star - a.star);
    //   } else {
    //     this.storeService.genresMovies.sort((a, b) =>  a.star - b.star);
    //   }
    // }

    // this.storeService.sortType = sortType;
    // this.storeService.page = this.page;
    // this.loadPage(this.storeService.page);
  }

  // loadPage(goToPage: number) {
  //   this.storeService.filterMovies = [];

  //   if (this.storeService.genresSelected === 'all') {
  //     this.storeService.filterMovies =
  //     this.storeService.movies.slice(((goToPage - 1) * this.storeService.pageSize), (goToPage * this.storeService.pageSize));
  //   } else {
  //     this.storeService.filterMovies =
  //     this.storeService.genresMovies.slice(((goToPage - 1) * this.storeService.pageSize), (goToPage * this.storeService.pageSize));
  //   }

  //   this.filterMovies = this.storeService.filterMovies;
  // }

  handleMovieDelete(movie: IMovie) {
    const newMovie = Object.assign({model: 'delete'}, movie);

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '450px',
      height: '340px',
      data: newMovie
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // this.storeService.filterMovies = this.storeService.movies.filter(item => item.id !== movie.id);
        // this.storeService.movies = [...this.storeService.filterMovies];
        // this.storeService.genresMovies = this.storeService.genresMovies.filter(item => item.id !== movie.id);

        // if (this.storeService.genresSelected === 'all') {
        //   this.storeService.collectionSize = this.storeService.movies.length;
        // } else {
        //   this.storeService.collectionSize = this.storeService.genresMovies.length;
        // }

        // this.collectionSize = this.storeService.collectionSize;
        // this.storeService.page = this.page;
        // this.loadPage(this.storeService.page);

        this.store.dispatch(new MoviesActions.DeleteMovie(movie.id));
      }
    });
  }

  handleMoviePlus(movie: IMovie) {
    // const movies: IMovie[] = this.storeService.movies.filter(item => movie.id !== item.id);
    // const genresMovies: IMovie[] = this.storeService.genresMovies.filter(item => movie.id !== item.id);

    // movies.push({
    //   id: movie.id,
    //   type: movie.type,
    //   title: movie.title,
    //   year: movie.year,
    //   star: movie.star + 1
    // });

    this.store.dispatch(new MoviesActions.PlusMovie(movie));

    // genresMovies.push({
    //   id: movie.id,
    //   type: movie.type,
    //   title: movie.title,
    //   year: movie.year,
    //   star: movie.star + 1
    // });

    // this.storeService.movies = movies;
    // this.storeService.genresMovies = genresMovies;
    // this.storeService.page = this.page;
    // this.loadPage(this.storeService.page);
    // this.handleSorting(this.storeService.sortType);
  }

  handleMovieMinus(movie: IMovie) {
    // const movies: IMovie[] = this.storeService.movies.filter(item => movie.id !== item.id);
    // const genresMovies: IMovie[] = this.storeService.genresMovies.filter(item => movie.id !== item.id);


    this.store.dispatch(new MoviesActions.MinusMovie(movie));

    // movies.push({
    //   id: movie.id,
    //   type: movie.type,
    //   title: movie.title,
    //   year: movie.year,
    //   star: movie.star - 1
    // });

    // genresMovies.push({
    //   id: movie.id,
    //   type: movie.type,
    //   title: movie.title,
    //   year: movie.year,
    //   star: movie.star - 1
    // });

    // this.storeService.movies = movies;
    // this.storeService.genresMovies = genresMovies;
    // this.storeService.page = this.page;
    // this.loadPage(this.storeService.page);
    // this.handleSorting(this.storeService.sortType);
  }

  // handleGenresSorting(event) {
  //   this.storeService.genresSelected = event;
  //   this.storeService.genresMovies = [];

  //   switch (this.storeService.genresSelected) {
  //     case 'series': {
  //       this.storeService.genresMovies = this.storeService.movies.filter((item) => item.type === 'series');
  //       this.filterMovies = this.storeService.genresMovies.slice(0, this.storeService.pageSize);
  //       this.storeService.collectionSize = this.storeService.genresMovies.length;
  //       this.collectionSize = this.storeService.collectionSize;
  //       this.storeService.page = 1;
  //       this.page = this.storeService.page;
  //       this.handleSorting(this.storeService.sortType);
  //       break;
  //     }

  //     case 'film': {
  //       this.storeService.genresMovies = this.storeService.movies.filter((item) => item.type === 'film');
  //       this.filterMovies = this.storeService.genresMovies.slice(0, this.storeService.pageSize);
  //       this.storeService.collectionSize = this.storeService.genresMovies.length;
  //       this.collectionSize = this.storeService.collectionSize;
  //       this.storeService.page = 1;
  //       this.page = this.storeService.page;
  //       this.handleSorting(this.storeService.sortType);
  //       break;
  //     }

  //     case 'all': {
  //       this.loadPage(this.storeService.page);
  //       this.handleSorting(this.storeService.sortType);
  //       this.storeService.collectionSize = this.storeService.movies.length;
  //       this.collectionSize = this.storeService.collectionSize;
  //       break;
  //     }
  //   }
  // }
}
