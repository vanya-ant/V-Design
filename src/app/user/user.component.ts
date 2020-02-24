import { Component, OnInit } from '@angular/core';
import { UserService } from 'kinvey-angular-sdk/lib';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  constructor(private userService: UserService) { }

  get activeUser() {
    return this.userService.getActiveUser();
  }

  async me() {
    try {
      if (this.activeUser) {
        await  this.activeUser.me();
      }
      return  this.activeUser;
    } catch (e) {
      console.log(e);
    }
  }

  async signup(data: any) {
    try {
      const user = await this.userService.signup(data);
      localStorage.setItem('newUser', JSON.stringify(user.data));
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  async login(username: string, password: string) {
    try {
      const user = await this.userService.login(username, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    try {
      await this.userService.logout();
    } catch (error) {
      console.log(error);
    }
  }

  async resetPassword(username: string) {
    try {
      const response = await this.userService.resetPassword(username);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  async exists(username: string) {
    try {
      const doesExist = await this.userService.exists(username);
      console.log(doesExist);
    } catch (error) {
      console.log(error);
    }
  }
}
