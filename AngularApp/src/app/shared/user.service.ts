import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private  baseURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  addUser(user: User) {
    console.log(user);
      return this.http.post(this.baseURL + '/addUser', user, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'});
    }

    getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.baseURL + '/finduser');
    }

    login (Object: object) {
        return this.http.post(this.baseURL + '/login', {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'});
      }
}
