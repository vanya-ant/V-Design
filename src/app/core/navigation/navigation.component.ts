import { Component, OnInit } from '@angular/core';
import {UserService} from 'kinvey-angular-sdk';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  get isLogged() { return !!this.userService.getActiveUser(); }

  get isAdmin() {
    if (this.isLogged) {
      // @ts-ignore
      const admin = this.userService.getActiveUser().data.role === 'Admin';
      return true;
    }
    return false;
  }

  get isDesigner() {
    if (this.isLogged) {
      // @ts-ignore
      const admin = this.userService.getActiveUser().data.role === 'Desiger';
      return true;
    }
    return false;
  }

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  async logout() {
    try {
      await this.userService.logout();
      localStorage.clear();
      await this.router.navigate(['home']);
    } catch (error) {
      console.log(error);
    }
  }
}
