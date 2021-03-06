import { Injectable } from '@angular/core';

import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from 'kinvey-angular-sdk';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const active = this.userService.getActiveUser();
    // @ts-ignore
    if (active.data.role === 'Admin' || active.data.role === 'Designer') {
      return true;
    }
    this.router.navigate(['/login']);
    this.toastr.error('Please, sign in with correct credentials!')
    return false;
  }
}
