import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  template: `
    <div class="flex flex-col min-h-screen">
      <!-- Nav bar -->
      <header class="navbar flex justify-center w-full bg-white shadow-sm">
        <nav class="container flex justify-between items-center px-4 h-20">
          <a routerLink="/dashboard" class="">
            <img
              class="logo h-7 w-auto"
              src="../../assets/dbs-logo-type.svg"
              alt="DBS Homepage"
            />
          </a>
          <div>
            <app-button variant="secondary" [customContent]="true">
              <ng-template appButtonContent>
                <a routerLink="/logout">Log out</a>
              </ng-template>
            </app-button>
          </div>
        </nav>
      </header>
      <div class="flex-auto">
        <div class="container mx-auto">
          <h1 class="text-xl font-semibold">You're logged in!</h1>
        </div>
      </div>
      <app-footer siteName="DBS iBanking"></app-footer>
    </div>
  `,
  styles: [],
})
export class DashboardPageComponent {}
