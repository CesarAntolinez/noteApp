import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {StorageService} from '../services/storage.service';
import {AuthConstants} from '../config/auth-constants';
import {error} from 'util';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  constructor(public storageService: StorageService, private route: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise(resolve => {
      this.storageService.get(AuthConstants.AUTH).then(response => {
        if (response) {
          resolve(true);
        } else {
          this.route.navigate(['login']);
          resolve(false);
        }
      }).catch(reason => {
        resolve(false);
      });
    });
  }
}
