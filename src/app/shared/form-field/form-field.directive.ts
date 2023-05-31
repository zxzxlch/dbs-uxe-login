import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'label[appFormFieldLabel]',
  standalone: true,
})
export class FormFieldLabelDirective {
  el: HTMLLabelElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }
}

@Directive({
  selector: 'input[appFormFieldInput]',
  standalone: true,
})
export class FormFieldInputDirective {
  el: HTMLInputElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }
}
