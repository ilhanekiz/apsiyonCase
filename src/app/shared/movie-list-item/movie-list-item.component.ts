import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMovie } from 'src/app/core/interfaces/movie.model';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.scss']
})
export class MovieListItemComponent implements OnInit {

  @Input() movies: IMovie[];
  @Output() movieDelete: EventEmitter<any> = new EventEmitter();
  @Output() moviePlus: EventEmitter<any> = new EventEmitter();
  @Output() movieMinus: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  handleMovieDelete(movie: IMovie) {
    this.movieDelete.emit(movie);
  }

  handleMoviePlus(movie: IMovie) {
    this.moviePlus.emit(movie);
  }

  handleMovieMinus(movie: IMovie) {
    this.movieMinus.emit(movie);
  }
}
