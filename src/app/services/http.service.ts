import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  post(serviceName: string, data: any) {
    const header = new HttpHeaders();
    const options = { headers: header, withCredintials: false };
    const url = environment.apiUrl + serviceName;

    return this.http.post(url, JSON.stringify(data), options);
  }
  put(serviceName: string, data: any) {
    const header = new HttpHeaders();
    const options = { headers: header, withCredintials: false};
    const url = environment.apiUrl + serviceName;

    return this.http.put(url, JSON.stringify(data), options);
  }
  delete(serviceName: string, data: any) {
    const header = new HttpHeaders();
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
