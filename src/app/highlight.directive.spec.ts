import { HighlightDirective } from './highlight.directive';

import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
// creating a test component in the spec file
@Component({
  selector: 'ngx-mix-test-disable-link-directive',
  template: ` <p appHighlight>Text</p> `,
})
class TestHighlightComponent {
  toggle = false;
  onClick() {
    this.toggle = !this.toggle;
  }
}

let component: TestHighlightComponent;
let fixture: ComponentFixture<TestHighlightComponent>;
let el: DebugElement;

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [HighlightDirective, TestHighlightComponent],
  });
  fixture = TestBed.createComponent(TestHighlightComponent);
  component = fixture.componentInstance;
  el = fixture.debugElement.query(By.css('p'));
  console.log(el);
});

describe('Highlight Directive', () => {
  it('should be yellow highlight on hover', () => {
    el.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(el.nativeElement.style.backgroundColor).toBe('yellow');
  });

  it('should be yellow highlight on hover', () => {
    el.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    expect(el.nativeElement.style.backgroundColor).toBe('transparent');
  });
});
