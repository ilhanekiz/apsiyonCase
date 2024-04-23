import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { IMovie } from '../core/interfaces/movie.model';
import { StoreService } from '../core/services/store.service';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as MoviesActions from '../reducers/movies.actions';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  movieForm: FormGroup = this.formBuilder.group({
    type: new FormControl(null, [Validators.required]),
    title: new FormControl(null, [Validators.required]),
    star: new FormControl(null, [Validators.required])
  });

  constructor(private formBuilder: FormBuilder,
              private storeService: StoreService,
              public dialog: MatDialog,
              private store: Store<{ movieList: { movies: IMovie[] } }>) {}

  ngOnInit(): void {}

  handleMovieAdd() {

    const formData: IMovie = {
      id: Math.floor(Math.random() * 20) * 5,
      type: this.movieForm.value.type,
      title: this.movieForm.value.title,
      year: Math.floor(Math.random() * 1990) * 2,
      star: Number(this.movieForm.value.star)
    };

    if (this.movieForm.status === 'VALID') {
      // this.storeService.movies.push(formData);
      this.store.dispatch(new MoviesActions.AddMovie(formData));
      this.movieForm.reset();

      this.dialog.open(DialogComponent, {
        width: '450px',
        height: '340px',
        data: { model: 'add' }
      });
    }
  }
}
