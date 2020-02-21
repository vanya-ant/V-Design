import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {shareReplay, tap} from 'rxjs/operators';
import {IUser} from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: IUser;

  get isLogged() {
    return !!this.currentUser;
  }

  constructor(private http: HttpClient) {
    const currentUser = localStorage.getItem('current-user');
    this.currentUser = currentUser ? JSON.parse(currentUser) : null;
  }

  login(email: string, password: string) {
    localStorage.setItem('current-user', JSON.stringify({ email, password }));
    this.currentUser = {email, password };
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('current-user');
  }
}
