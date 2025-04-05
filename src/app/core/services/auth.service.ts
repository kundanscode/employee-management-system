import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { authenticationApi } from '../helper/constants';
import * as CryptoJS from 'crypto-js';
// var CryptoJS = require('crypto-js');

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = authenticationApi.users;
  private tokenKey = 'auth_token';
  private userSubject = new BehaviorSubject<string | null>(this.getToken());
  public user$: Observable<string | null> = this.userSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    // Encrypt the password using CryptoJS
    const encryptedPassword = CryptoJS.SHA256(password).toString();
    console.log('====================================');
    console.log('encryptedPassword -> ', encryptedPassword);
    console.log('====================================');

    return this.http
      .get<any[]>(
        `${this.apiUrl}?username=${username}&password=${encryptedPassword}`
      )
      .pipe(
        map((users) => {
          if (users.length > 0) {
            const user = users[0];
            console.log('====================================');
            console.log(user);
            console.log('====================================');
            this.setToken(user.token);
            this.setUser(user.username);
            return user;
          }
          throw new Error('Invalid credentials');
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.userSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.userSubject.next(token);
  }

  private setUser(user: any): void {
    localStorage.setItem('user', user);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUser(): string | null {
    return localStorage.getItem('user');
  }
}
