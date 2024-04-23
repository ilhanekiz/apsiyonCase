import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';
import { Router, RouterState } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as MoviesActions from '../../reducers/movies.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sorting: EventEmitter<any> = new EventEmitter();
  @Output() genresEvent: EventEmitter<any> = new EventEmitter();

  isDecreasing = true;
  isIncreasing = false;
  isListPage = false;
  sortType$: Observable<{ movieSortType: string }>;
  genres: Observable<{ genres: string }>;
  sortType: string;
  genresType: string;
  genresSelected: string;

  constructor(private storeService: StoreService,
              private router: Router,
              private store: Store<{ state: { movieSortType: string, genres: string } }>) {
    const state: RouterState = router.routerState;
    this.isListPage = state.snapshot.url === '/list' ? true : false;
  }

  ngOnInit(): void {
    this.sortType$ = this.store.select('state');
    this.store.select('state').subscribe((state) => {
      this.sortType = state.movieSortType;
      this.genresType = state.genres;
    });

    this.handleSorting(this.sortType);
    this.genresSelected = this.genresType;
  }

  handleSorting(sortName: string) {

    this.storeService.sortType = sortName;

    if (sortName === 'decreasing') {
      this.isDecreasing = true;
      this.isIncreasing = false;
    } else {
      this.isIncreasing = true;
      this.isDecreasing = false;
    }

    this.sorting.emit(sortName);
  }

  genresChange(event) {
    // this.genresEvent.emit(event.value);
    this.store.dispatch(new MoviesActions.GenresMovie(event.value));
  }
}
