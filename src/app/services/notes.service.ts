import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  user;
  constructor(private http: HttpClient, private auth: AuthService) {
      this.auth.userData$.subscribe((res: any) => {
          this.user = res;
      });
  }

  list() {
    const header = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.user.token);
    const options = { headers: header, withCredintials: false };
    const url = environment.apiUrl + 'notes';
    return this.http.get(url,  options);
  }
}
