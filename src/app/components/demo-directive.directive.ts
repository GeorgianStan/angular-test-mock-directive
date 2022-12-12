import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appDemoDirective]',
  standalone: true,
})
export class DemoDirectiveDirective {
  constructor(private hostElement:ElementRef) {
    this.hostElement.nativeElement.innerHTML += 'Update from directive! ';
  }
}
