import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

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
    this.#submitted = true;

    // Prevent submitting again while submitting
    if (this.submitting) return;

    // If form has errors, cancel submit, focus on first field with errors
    // TODO: Focus on first field with error
    if (!this.loginForm.valid) return;

    // TODO: Disable form and show loading state
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
        // TODO: Focus on the first field with an error
      }
    });
  }
}
