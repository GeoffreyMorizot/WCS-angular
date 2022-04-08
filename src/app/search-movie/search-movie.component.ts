import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { rangeDateValidator } from '../validators/rangeDateValidator';
import isRequiredValidator from '../validators/isRequiredValidator';
import { SearchFilmModel } from '../models/search-model.model';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
})
export class SearchMovieComponent implements OnInit {
  //Types de film
  types = [
    { name: 'Film', value: 'film' },
    { name: 'Série', value: 'serie' },
    { name: 'Épisode', value: 'episode' },
  ];
  //Format du document souhaité
  forms = [
    { name: 'Complète', value: 'full' },
    { name: 'Courte', value: 'short' },
  ];

  searchMovieForm = this.fb.group({
    identifiers: this.fb.group({
      title: [''],
      id: [''],
    }),
    type: ['', [Validators.required]],
    release: ['', [Validators.required, rangeDateValidator(1900)]],
    form: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    //Set le validateur demandant de remplir au moins un des 2 champs
    this.searchMovieForm.controls['identifiers'].setValidators(
      isRequiredValidator('title', 'id')
    );
    // Valeur par défaut des select
    this.searchMovieForm.patchValue({ type: 'serie' });
    this.searchMovieForm.patchValue({ form: 'short' });
    this.searchMovieForm.valueChanges.subscribe((value) => console.log(value));
  }

  handleSubmit() {
    console.log(
      'SUBMITTED !',
      JSON.stringify(this.searchMovieForm.value, null, 2)
    );
  }
}
