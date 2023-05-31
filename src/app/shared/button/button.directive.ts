import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appButton]',
  host: {
    class: 'app-button',
  },
})
export class ButtonDirective {
  constructor(private el: ElementRef) {}
}
