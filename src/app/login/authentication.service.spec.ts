import { TestBed } from '@angular/core/testing';

import {
  AuthenticationService,
  TOKEN_KEY,
  MOCK_USERNAME,
  MOCK_PASSWORD,
} from './authentication.service';
import { HttpResponse } from '@angular/common/http';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationService);
    service.delayDuration = 100;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('authenticates with a response', (done: DoneFn) => {
    service.authenticate('user', '123').subscribe((value) => {
      expect(value).toEqual(jasmine.any(HttpResponse));
      done();
    });
  }, 3000);

  describe('upon successful authentication', () => {
    it('returns a 200 status', (done: DoneFn) => {
      service.authenticate(MOCK_USERNAME, MOCK_PASSWORD).subscribe((res) => {
        expect(res.status).toBe(200);
        done();
      });
    }, 3000);

    it('returns an access token', (done: DoneFn) => {
      service.authenticate(MOCK_USERNAME, MOCK_PASSWORD).subscribe((res) => {
        expect(res.body).toEqual(
          jasmine.objectContaining({
            accessToken: jasmine.any(String),
          })
        );
        done();
      });
    }, 3000);

    it('stores the token in local storage', (done: DoneFn) => {
      service.authenticate(MOCK_USERNAME, MOCK_PASSWORD).subscribe((res) => {
        expect(localStorage.getItem(TOKEN_KEY)).toBeTruthy();
        done();
      });
    }, 3000);
  });

  describe('upon unsuccessful authentication', () => {
    it('returns a 401 status', (done: DoneFn) => {
      service.authenticate('abc', '456').subscribe((res) => {
        expect(res.status).toBe(401);
        done();
      });
    }, 3000);

    it('returns an error object', (done: DoneFn) => {
      service.authenticate('abc', '456').subscribe((res) => {
        expect(res.body).toEqual(
          jasmine.objectContaining({
            error: {
              message: jasmine.any(String),
              errors: jasmine.any(Object),
            },
          })
        );
        done();
      });
    }, 3000);

    it('with wrong username returns errors with only username', (done: DoneFn) => {
      service.authenticate('123', MOCK_PASSWORD).subscribe((res) => {
        const {
          body: {
            error: { errors },
          },
        } = res;
        expect(errors).toEqual(
          jasmine.objectContaining({ username: jasmine.anything() })
        );
        expect(errors).not.toEqual(
          jasmine.objectContaining({ password: jasmine.anything() })
        );
        done();
      });
    }, 3000);

    it('with wrong password returns errors with only password', (done: DoneFn) => {
      service.authenticate(MOCK_USERNAME, '456').subscribe((res) => {
        const {
          body: {
            error: { errors },
          },
        } = res;
        expect(errors).toEqual(
          jasmine.objectContaining({ password: jasmine.anything() })
        );
        expect(errors).not.toEqual(
          jasmine.objectContaining({ username: jasmine.anything() })
        );
        done();
      });
    }, 3000);
  });

  it('removes the token upon logout', () => {
    service.logout();
    expect(localStorage.getItem(TOKEN_KEY)).toBeNull();
  });
});
