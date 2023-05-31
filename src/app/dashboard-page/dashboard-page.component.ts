import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  template: `
    <div class="flex flex-col min-h-screen bg-gray-50">
      <!-- Nav bar -->
      <header class="navbar flex justify-center w-full bg-white shadow-sm">
        <nav
          class="container flex justify-between items-center px-4 h-16"
        >
          <!-- Nav logo -->
          <a routerLink="/dashboard" class="logo flex items-center">
            <img
              class="w-7 h-7"
              src="../../assets/dbs-logo-mark.svg"
              alt="DBS Bank logo"
            />
            <span class="ml-3 pl-3 py-1 border-l border-gray-300"
              >DBS iBanking</span
            >
          </a>
          <div>
            <app-button [customContent]="true">
              <ng-template appButtonContent>
                <a routerLink="/logout">Log out</a>
              </ng-template>
            </app-button>
          </div>
        </nav>
      </header>
      <div class="flex-auto">
        <div class="container mx-auto px-4 pt-12 pb-12">
          <div class="pb-20">
            <!-- Content -->
            <h1 class="text-2xl">Welcome, Odo!</h1>
          </div>
        </div>
      </div>
      <app-footer siteName="DBS iBanking"></app-footer>
    </div>
  `,
  styles: [
    `
      .navbar a.logo {
        font-size: var(--font-size-xl);
        font-weight: var(--font-weight-semibold);
        color: var(--color-gray-900);
      }
      .navbar a.logo:hover,
      .navbar a.logo:focus {
        text-decoration: none;
      }
    `,
  ],
})
export class DashboardPageComponent {}
