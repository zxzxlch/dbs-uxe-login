import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { LoginPanelComponent } from './login/login-panel/login-panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldErrorComponent } from './shared/form-field-error/form-field-error.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ButtonDirective } from './shared/button/button.directive';
import { LoadingAnimComponent } from './shared/loading-anim/loading-anim.component';
import { FormFieldComponent } from './shared/form-field/form-field.component';
import {
  FormFieldInputDirective,
  FormFieldLabelDirective,
} from './shared/form-field/form-field.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterComponent,
    LoginPageComponent,
    LoginPanelComponent,
    DashboardPageComponent,
    ButtonDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormFieldComponent,
    FormFieldErrorComponent,
    FormFieldLabelDirective,
    FormFieldInputDirective,
    LoadingAnimComponent,
  ],
})
export class AppModule {}
