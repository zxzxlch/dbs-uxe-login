import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-field-error',
  standalone: true,
  imports: [CommonModule],
  template: `
    <small
      [id]="id ?? null"
      [attr.aria-live]="ariaLive"
      [attr.aria-atomic]="ariaAtomic"
      class="message"
    >
      {{ message }}
    </small>
  `,
  styles: [
    `
      .message {
        font-size: var(--font-size-sm);
        color: var(--color-red-600);
      }
    `,
  ],
})
export class FormFieldErrorComponent {
  @Input() id: string | undefined;
  @Input() message: string = '';
  @Input() ariaLive: 'off' | 'polite' | 'assertive' = 'off';
  @Input() ariaAtomic: 'true' | 'false' = 'false';
}
