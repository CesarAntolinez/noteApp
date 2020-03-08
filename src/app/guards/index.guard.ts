import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthConstants} from '../config/auth-constants';
import {StorageService} from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class IndexGuard implements CanActivate {
  constructor(public storageService: StorageService, private route: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise(resolve => {
      this.storageService.get(AuthConstants.AUTH).then(response => {
        if (response) {
          this.route.navigate(['notes/index']);
          resolve(false);
        } else {
          resolve(true);
        }
      }).catch(reason => {
        resolve(false);
      });
    });
  }
}
