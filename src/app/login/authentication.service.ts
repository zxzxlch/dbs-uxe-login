import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

export const TOKEN_KEY = 'accessKey';
export const MOCK_USERNAME = 'odo';
export const MOCK_PASSWORD = 'cookie';

function mockSuccessResponse() {
  return new HttpResponse({
    status: 200,
    body: {
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      expiresIn: 3600,
    },
  });
}

function mockErrorResponse(errors: any) {
  const body = {
    error: {
      message: 'Authentication failed',
      errors,
    },
  };
  return new HttpResponse({
    status: 401,
    body,
  });
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  delayDuration: number = 2000;

  public get isLoggedIn(): boolean {
    return !!localStorage.getItem(TOKEN_KEY);
  }

  constructor() {}

  authenticate(
    username: string,
    password: string
  ): Observable<HttpResponse<any>> {
    if (username == MOCK_USERNAME && password == MOCK_PASSWORD) {
      const res = mockSuccessResponse();
      localStorage.setItem(TOKEN_KEY, res.body!.accessToken);
      return of(res).pipe(delay(this.delayDuration));
    } else {
      let errors: any = {};
      if (username != MOCK_USERNAME) errors.username = 'Invalid username';
      if (password != MOCK_PASSWORD) errors.password = 'Invalid password';
      let res = mockErrorResponse(errors);
      return of(res).pipe(delay(this.delayDuration));
    }
  }

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
  }
}
