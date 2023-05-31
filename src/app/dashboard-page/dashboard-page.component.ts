import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  template: `
    <div class="flex flex-col min-h-screen">
      <app-header></app-header>
      <div class="flex-auto">
        <div class="container mx-auto">
          <h1 class="text-xl font-semibold">You're logged in!</h1>
        </div>
      </div>
      <app-footer></app-footer>
    </div>
  `,
  styles: [],
})
export class DashboardPageComponent {}
