import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public setToken(tokenkey: string) {
    this.clearToken();
    localStorage.setItem('token', tokenkey);
  }

  public clearToken() {
      localStorage.clear();
  }

  // public isAuthenticated(): boolean {
  //
  //   const token = this.getToken();
  //   // return a boolean reflecting
  //   // whether or not the token is expired
  //   return tokenNotExpired(null, token);
  // }

}
