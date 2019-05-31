import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuth = false;

  login() {
    this.isAuth = true;
  }

  isLogged() {
    return this.isAuth;
  }
}
