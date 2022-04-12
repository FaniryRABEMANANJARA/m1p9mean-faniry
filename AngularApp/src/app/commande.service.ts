import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Commande } from './commande.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private  baseURL = 'https://porjectnode.herokuapp.com';

  constructor(private http: HttpClient) { }
 getCommande(): Observable<Commande[]> {
      return this.http.get<Commande[]>(this.baseURL + '/findcommande');
    }
}
