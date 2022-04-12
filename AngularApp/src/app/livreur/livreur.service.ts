import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import  {Livreur} from '../livreur/livreur.model';
@Injectable({
  providedIn: 'root'
})
export class LivreurService {
  private  baseURL = 'https://porjectnode.herokuapp.com/';

  constructor(private http: HttpClient) { }
  getLivreurs(): Observable<Livreur[]> {
      return this.http.get<Livreur[]>(this.baseURL + '/findLivreur');
    }
    addLivreur(livreur: Livreur) {
      console.log(livreur);
        return this.http.post(this.baseURL + '/addLivreur', livreur, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'});
      }
}
