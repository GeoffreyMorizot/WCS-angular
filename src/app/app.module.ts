import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HighlightDirective } from './highlight.directive';
import { DisplayGuestsDirective } from './display-guests.directive';
import { HighlightFirstDirective } from './highlight-first.directive';
import { DisplayFilmDirective } from './display-film.directive';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { ROUTES } from './app.routes';
import { MyFormComponent } from './my-form/my-form.component';
import { SignupReactiveComponent } from './signup-reactive/signup-reactive.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    HighlightDirective,
    DisplayGuestsDirective,
    HighlightFirstDirective,
    DisplayFilmDirective,
    MenuComponent,
    SignupComponent,
    MyFormComponent,
    SignupReactiveComponent,
    SearchMovieComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
