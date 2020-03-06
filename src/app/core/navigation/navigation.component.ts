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
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  async logout() {
    try {
      await this.userService.logout();
      localStorage.clear();
      await this.router.navigate(['/home']);
    } catch (error) {
      console.log(error);
    }
  }
}
