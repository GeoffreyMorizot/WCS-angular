import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlightFirst]',
})
export class HighlightFirstDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  @HostListener('mouseenter') mouseEnterEvent() {
    const isFirst =
      this.elRef.nativeElement ===
      this.elRef.nativeElement.parentElement.firstChild;

    this.renderer.setAttribute(
      this.elRef.nativeElement,
      'class',
      isFirst ? 'highlight' : ''
    );
  }

  @HostListener('mouseleave') mouseLeaveEvent() {
    this.renderer.setAttribute(this.elRef.nativeElement, 'class', '');
  }
}
