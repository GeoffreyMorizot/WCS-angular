import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @HostBinding('style.background-color')
  backgroundColor!: string;

  @HostListener('mouseenter') mouseEnterEvent(e: Event) {
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseLeaveEvent(e: Event) {
    this.backgroundColor = 'transparent';
  }
}
