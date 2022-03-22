import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDisplayFilm]',
})
export class DisplayFilmDirective {
  @Input() set appDisplayFilm(condition: boolean) {
    condition ? this.vwRef.createEmbeddedView(this.tplRef) : this.vwRef.clear();
  }

  constructor(
    private tplRef: TemplateRef<any>,
    private vwRef: ViewContainerRef
  ) {}
}
