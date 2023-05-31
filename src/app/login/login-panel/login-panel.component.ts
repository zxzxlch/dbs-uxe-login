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
    `,
  ],
})
export class LoginPanelComponent {
  submitted: boolean = false;

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.maxLength(60)]],
    password: ['', [Validators.required, Validators.maxLength(60)]],
  });

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
    this.submitted = true;
    if (this.loginForm.errors) return;
    // TODO: Focus on first field with error

    // TODO: Disable form and show loading state
    

    const { username, password } = this.loginForm.value;
    this.authService.authenticate(username!, password!).subscribe((res) => {
      if (this.authService.isLoggedIn) {
        // Logged in, redirect
        this.router.navigateByUrl('/dashboard', );
      } else {
        // TODO: Show errors
      }
    });
  }
}
