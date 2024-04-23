import { Component } from '@angular/core';
import { StoreService } from './core/services/store.service';
import { Store, select } from '@ngrx/store';
import { IAppState } from './core/interfaces/appState.model';
import * as MoviesActions from './reducers/movies.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  theme = {
    isPrimary: this.storeService.theme.isPrimary,
    isGray: this.storeService.theme.isGray,
    isBlue: this.storeService.theme.isBlue
  };

  constructor(private storeService: StoreService, private store: Store<IAppState>) {
    this.store.dispatch(new MoviesActions.LoadMovies());
  }

  handleThemeChange(event: string) {
    switch (event) {
      case 'primary': {
        this.storeService.theme = { isPrimary: true, isGray: false, isBlue: false };
        this.theme = { isPrimary: true, isGray: false, isBlue: false };
        break;
      }

      case 'gray': {
        this.storeService.theme = {isPrimary: false, isGray: true, isBlue: false };
        this.theme = { isPrimary: false, isGray: true, isBlue: false };
        break;
      }

      case 'blue': {
        this.storeService.theme = { isPrimary: false, isGray: false, isBlue: true };
        this.theme = { isPrimary: false, isGray: false, isBlue: true };
        break;
      }
    }
  }
}
