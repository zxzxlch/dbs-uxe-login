import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  ContentChild,
  AfterContentInit,
} from '@angular/core';
import {
  FormFieldLabelDirective,
  FormFieldInputDirective,
} from './form-field.directive';
import { FormControlName } from '@angular/forms';
import { FormFieldErrorComponent } from '../form-field-error/form-field-error.component';

/**
 * FormFieldComponent wraps a label, input (text, email, password, etc.), and an error component.
 *
 * Usage:
 * <app-form-field name="username">
 *   <label appFormFieldLabel>Username</label>
 *   <input appFormFieldInput formControlName="username" type="text" required />
 *   <app-form-field-error></app-form-field-error>
 * </app-form-field>
 *
 * The `appFormFieldLabel` directive should be used for the label element, and the `appFormFieldInput`
 * directive should be used for the input element. The input field should have the `formControlName` property
 * assigned as part of your reactive form setup.
 *
 * This component automatically adds an id to the input element and the FormFieldError component
 * based on the provided `name` property. It also adds `htmlFor` and `describedBy` attributes for accessibility.
 */
@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class FormFieldComponent implements AfterContentInit {
  @Input({ required: true }) name!: string;
  // @Input() error: string | undefined;
  @ContentChild(FormFieldLabelDirective) formFieldLabelDirective:
    | FormFieldLabelDirective
    | undefined;
  @ContentChild(FormFieldInputDirective) formFieldInputDirective:
    | FormFieldInputDirective
    | undefined;
  @ContentChild(FormFieldErrorComponent) formFieldError:
    | FormFieldErrorComponent
    | undefined;
  @ContentChild(FormControlName) formControlName?: FormControlName;

  public get labelElement(): HTMLLabelElement | undefined {
    return this.formFieldLabelDirective?.el;
  }

  public get inputElement(): HTMLInputElement | undefined {
    return this.formFieldInputDirective?.el;
  }

  ngAfterContentInit(): void {
    if (this.inputElement && this.labelElement) {
      // Assign id based on form control name
      // and set relationships for accessibility
      this.inputElement.id = this.name;
      this.inputElement.name = this.name;
      this.labelElement.htmlFor = this.name;

      if (this.formFieldError) {
        const id = `${this.name}-error`;
        this.formFieldError.id = id;
        this.inputElement.setAttribute('aria-describedby', id);
      }
    }
  }

  updateError(): void {
    const formControlName = this.formControlName;
    const formFieldError = this.formFieldError;
    if (!formControlName || !formFieldError) return;

    if (!formControlName.errors) {
      formFieldError.message = '';
    } else {
      // There's only one possible error for now
      if (formControlName.errors['required']) {
        formFieldError.message = `Please enter a ${this.name}`;
      }
    }
  }
}
