import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { LoginPanelComponent } from './login/login-panel/login-panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './shared/button/button.component';
import { ButtonContentDirective } from './shared/button-content.directive';
import { FormFieldErrorComponent } from './shared/form-field-error/form-field-error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    LoginPageComponent,
    LoginPanelComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ButtonComponent,
    ButtonContentDirective,
    FormFieldErrorComponent
  ],
})
export class AppModule {}
