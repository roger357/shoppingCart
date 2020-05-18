import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Client } from './model/client';
import { ShoppingCar } from './model/shoppingCar';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCarService {

  private SHOPP_BASE_URL = 'http://127.0.0.1:8080/shoppingcar';
  private CLIENTS_BASE_URL = 'http://127.0.0.1:8080/clients';
  private PRODUCTS_BASE_URL = 'http://127.0.0.1:8080/products';

  constructor(private httpClient: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.CLIENTS_BASE_URL).pipe(catchError(this.errorHandler))
  }

  getClient(idCliente: number): Observable<Client> {
    const url = `${this.CLIENTS_BASE_URL}/get/${idCliente}`;
    return this.httpClient.get<Client>(url).pipe(catchError(this.errorHandler))
  }

  getCars(idCliente: number): Observable<ShoppingCar[]> {
    const url = `${this.SHOPP_BASE_URL}/all/${idCliente}`;
    return this.httpClient.get<ShoppingCar[]>(url).pipe(catchError(this.errorHandler));
  }

  getCar(idCar: number): Observable<ShoppingCar> {
    const url = `${this.SHOPP_BASE_URL}/query/${idCar}`;
    return this.httpClient.get<ShoppingCar>(url).pipe(catchError(this.errorHandler));
  }

  createCar(idCliente: number): Observable<ShoppingCar> {
    const url = `${this.SHOPP_BASE_URL}/create/${idCliente}`;
    return this.httpClient.get<ShoppingCar>(url).pipe(catchError(this.errorHandler));
  }

  purchaseCar(idCar: number): Observable<ShoppingCar> {
    const url = `${this.SHOPP_BASE_URL}/purchase/${idCar}`;
    return this.httpClient.get<ShoppingCar>(url).pipe(catchError(this.errorHandler));
  }

  deleteCar(idCar: number): Observable<{}> {
    const url = `${this.SHOPP_BASE_URL}/delete/${idCar}`;
    return this.httpClient.delete(url).pipe(catchError(this.errorHandler));
  }

  getProducts(): Observable<Product[]> {
    const url = `${this.PRODUCTS_BASE_URL}`;
    return this.httpClient.get<Product[]>(url).pipe(catchError(this.errorHandler));
  }

  addProductCar(carId: number, prodId: number): Observable<ShoppingCar> {
    const url = `${this.SHOPP_BASE_URL}/addproduct/${carId}/${prodId}`;
    return this.httpClient.get<ShoppingCar>(url).pipe(catchError(this.errorHandler));
  }

  deleteProductCar(carId: number, prodId: number): Observable<ShoppingCar> {
    const url = `${this.SHOPP_BASE_URL}/removeproduct/${carId}/${prodId}`;
    return this.httpClient.get<ShoppingCar>(url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
