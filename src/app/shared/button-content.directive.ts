import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appButtonContent]',
  standalone: true,
})
export class ButtonContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
