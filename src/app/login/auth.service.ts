import { Injectable } from '@angular/core';
import { User } from './User';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private _user: User, private _router: Router) { }


  getUsers() {

  }

  isUserValido(user: User) {
    if (user.userName === this.getDefaultUser().userName) {
      this._router.navigate(['home']);
      return true;
    }
    return false;
  }

  getDefaultUser() {
    this._user.setName('My name');
    this._user.setEmail('usermail@mail.com');
    this._user.setUserName('My UserName');
    this._user.setSenha('1234');
    return this._user;
  }

}


