import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app.routing.module';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {AuthService} from './login/auth.service';
import { User } from './login/User';
import { CreateProductModalComponent } from './create-product-modal/create-product-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    CreateAccountComponent,
    HomeComponent,
    CreateProductModalComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService, User],
  bootstrap: [AppComponent]
})
export class AppModule { }
