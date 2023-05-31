import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-field-error',
  standalone: true,
  imports: [CommonModule],
  template: `<small class="message">{{ message }}</small>`,
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
  @Input() message: string = '';
}
