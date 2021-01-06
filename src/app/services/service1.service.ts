import {Injectable} from '@angular/core';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  user: User = {password: '', username: ''};
  http: HttpClient;
  prop1 = false;

  constructor(param1: HttpClient) {
    this.http = param1;
  }

  login(): void {
    this.user.username = JSON.parse(localStorage.getItem('username'));
    this.user.password = JSON.parse(localStorage.getItem('password'));

  }

  isAuthenticated(): boolean {
    return localStorage.getItem('username') !== null;
  }

  getPosts(): Observable<any> {

    return this.http.get('https://jsonplaceholder.typicode.com/posts');

  }
}
