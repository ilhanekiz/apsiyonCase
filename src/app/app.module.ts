import { moviesReducer } from './reducers/movies.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbPaginationModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { StoreService } from './core/services/store.service';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from './shared/header/header.component';
import { MovieListItemComponent } from './shared/movie-list-item/movie-list-item.component';
import { DialogComponent } from './shared/dialog/dialog.component';

import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DigitOnlyModule } from '@uiowa/digit-only';
import { ThemeColorComponent } from './shared/theme-color/theme-color.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    HeaderComponent,
    MovieListItemComponent,
    DialogComponent,
    ThemeColorComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbPaginationModule,
    NgbDropdownModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatRadioModule,
    DigitOnlyModule,
    StoreModule.forRoot({ state: moviesReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    })
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
