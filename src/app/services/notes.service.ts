import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient, private auth: AuthService) {}

  list(token: string ) {
    const header = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + token );
    const options = { headers: header, withCredintials: false };
    const url = environment.apiUrl + 'notes';
    return this.http.get(url,  options);
  }

  put(serviceName: string, data: any) {
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { headers: header, withCredintials: false};
    const url = environment.apiUrl + serviceName;

    return this.http.put(url, JSON.stringify(data), options);
  }
  delete(serviceName: string, data: any) {
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { headers: header, withCredintials: false };
    const url = environment.apiUrl + serviceName;

    return this.http.delete(url, options);
  }
  get(serviceName: string, data: any) {
    const header = new HttpHeaders();
    const options = { headers: header, withCredintials: false };
    const url = environment.apiUrl + serviceName;

    return this.http.get(url, options);
  }
}
