
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { LoginComponent } from './login/login.component';
import {CreateAccountComponent} from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'create-account', component: CreateAccountComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: LoginComponent}
];
@NgModule({

  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
