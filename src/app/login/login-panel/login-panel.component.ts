import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}
}
