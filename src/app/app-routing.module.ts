import { Injectable, NgModule } from '@angular/core';
import {
  RouterModule,
  RouterStateSnapshot,
  Routes,
  TitleStrategy,
} from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { authGuard } from './auth/auth.guard';
import { LogoutComponent } from './login/logout/logout.component';
import { Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class AppTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    const newTitle = title ? `${title} | dbs-uxe-login` : 'dbs-uxe-login';
    this.title.setTitle(newTitle);
  }
}

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'DBS Singapore',
    component: HomePageComponent,
  },
  {
    path: 'login',
    title: 'Log in to DBS iBanking Singapore',
    component: LoginPageComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [authGuard],
  },
  {
    path: 'dashboard',
    title: 'DBS iBanking Singapore',
    component: DashboardPageComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: AppTitleStrategy }],
})
export class AppRoutingModule {}
