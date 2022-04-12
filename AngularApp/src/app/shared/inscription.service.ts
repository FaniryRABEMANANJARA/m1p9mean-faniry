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
export class InscriptionService {

  private  baseURL = 'https://porjectnode.herokuapp.com';

  constructor(private http: HttpClient) { }

  addUser(user: User) {
    console.log(user);
      return this.http.post(this.baseURL + '/addUser', user, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'});
    }


}
