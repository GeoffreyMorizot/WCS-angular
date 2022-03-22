import { Routes } from '@angular/router';
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
    path: 'user',
    component: UserProfileComponent,
  },
];

export { ROUTES };
