import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HighlightDirective } from './highlight.directive';
import { DisplayGuestsDirective } from './display-guests.directive';
import { HighlightFirstDirective } from './highlight-first.directive';
import { DisplayFilmDirective } from './display-film.directive';

@NgModule({
  declarations: [AppComponent, UserProfileComponent, HighlightDirective, DisplayGuestsDirective, HighlightFirstDirective, DisplayFilmDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
