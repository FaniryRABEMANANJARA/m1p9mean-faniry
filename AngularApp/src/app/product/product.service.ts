import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from './product.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = 'https://porjectnode.herokuapp.com';  // Base URL to REST API

  constructor(private http: HttpClient) { }

  /** GET products from the server */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl + '/findproduct');
  }

  /** GET product by id. Will 404 if id not found */
  getProduct(id: string): Observable<any> {
    const url = `${this.productUrl}/finddetail/${id}`;
console.log(id);
    return this.http.get<Product>(url);

  }

  /** POST: add a new product to the server */
  addProduct(product: Product) {
	console.log(product);
    return this.http.post(this.productUrl + '/addProduct', product, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'});
  }

  /** PUT: update the product on the server */
  updateProduct(product: Product): Observable<any> {

    return this.http.post(this.productUrl + '/updateProduct', product, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'});
  }

  /** DELETE: delete the product from the server */
  deleteProduct(product: Product) {
	  if (confirm("Are you sure to delete?")) {
		console.log(product);

		const options = {
		  headers: new HttpHeaders({
			'Content-Type': 'application/json',
		  }),
		  body: product,
		  responseType: 'text' as 'json'
		};

		return this.http.get(this.productUrl + '/deleteProduct/' + product._id, options);
	  }

	  return of({});
  }

}
