import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  autenticar() {
    this._authService.isUserValido(this.user);
  }

}
