
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { LoginComponent } from './login/login.component';
import {CreateAccountComponent} from './create-account/create-account.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'create-account', component: CreateAccountComponent},
  { path: '', component: LoginComponent}
];
@NgModule({

  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
