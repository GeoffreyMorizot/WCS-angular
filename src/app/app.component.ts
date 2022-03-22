import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Raclette party';
  isThisIngredientVital: boolean = false;
  displayGuestList: boolean = true;
  songList: string[] = ['alejandro', 'Ne me quitte pas', 'Le temps est bon'];

  films: string[] = [
    'The Godfather',
    'The Shawshank Redemption',
    'Gone with the wind',
    'Casablanca',
  ];
  showMovies = true;
}
