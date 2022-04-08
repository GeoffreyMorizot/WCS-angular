import { Routes } from '@angular/router';
import { MyFormComponent } from './my-form/my-form.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { SignupReactiveComponent } from './signup-reactive/signup-reactive.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const ROUTES: Routes = [
  {
    path: '',
    component: UserProfileComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'signupreactive',
    component: SignupReactiveComponent,
  },
  {
    path: 'order',
    component: MyFormComponent,
  },
  {
    path: 'user',
    component: UserProfileComponent,
  },
  {
    path: 'search-movie',
    component: SearchMovieComponent,
  },
];

export { ROUTES };
