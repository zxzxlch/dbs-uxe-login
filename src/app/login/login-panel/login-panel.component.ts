import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MOCK_USERNAME } from 'src/app/auth/auth.service';
import { MOCK_PASSWORD } from 'src/app/auth/auth.service';
import { AuthService } from 'src/app/auth/auth.service';
import { FormFieldComponent } from 'src/app/shared/form-field/form-field.component';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styles: [
    `
      :host {
        background: var(--color-white);
      }
      .ng-submitted input[type='email'].ng-invalid,
      .ng-submitted input[type='text'].ng-invalid,
      .ng-submitted input[type='password'].ng-invalid {
        border: 2px solid var(--color-red-500);
      }
    `,
  ],
})
export class LoginPanelComponent {
  @ViewChildren(FormFieldComponent) formFields:
    | QueryList<FormFieldComponent>
    | undefined;
  #submitting: boolean = false;
  #submitted: boolean = false;

  public get submitted(): boolean {
    return this.#submitted;
  }

  public get submitting(): boolean {
    return this.#submitting;
  }

  loginForm = this.fb.group(
    {
      username: ['', [Validators.required, Validators.maxLength(60)]],
      password: ['', [Validators.required, Validators.maxLength(60)]],
    },
    { updateOn: 'submit' }
  );

  public get username() {
    return this.loginForm.get('username');
  }

  public get password() {
    return this.loginForm.get('password');
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    // Prevent submitting again while submitting
    if (this.submitting) return;

    // Mark form as submitted before
    this.#submitted = true;

    // Now that validation has been performed, get all form fields to show
    // any error messages
    this.formFields?.forEach((formField) => {
      formField.updateError();
    });

    // If form has errors, cancel submit, focus on first field with errors
    if (!this.loginForm.valid) {
      this.focusErrorField();
      return;
    }

    // Disable form and show loading state
    const { username, password } = this.loginForm.value;
    this.#submitting = true;
    this.authService.authenticate(username!, password!).subscribe((res) => {
      this.#submitting = false;
      if (this.authService.isLoggedIn) {
        // Logged in, redirect
        this.router.navigateByUrl('/dashboard');
      } else {
        // Show authentication errors
        this.loginForm.setErrors({ failedAuthentication: true });
        this.focusErrorField();
      }
    });
  }

  focusErrorField(): void {
    if (!this.formFields) return;

    for (const formField of this.formFields) {
      // Find the first field with an error
      if (!formField.formControlName) continue;
      if (formField.formControlName.errors) {
        formField.inputElement?.focus();
      }
    }
  }

  // Just for this mock scenario, show the mock username and password 
  onSelectUsernameOrPassword(evt: Event): void {
    evt.preventDefault();
    alert(`Username: ${MOCK_USERNAME}\nPassword: ${MOCK_PASSWORD}`);
  }
}
