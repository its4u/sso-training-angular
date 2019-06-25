import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@core/models/product';
import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';

/**
 * Passenger service for UIP context to use passenger back-end object.
 * Extends ApiService.
 */
@Injectable()
export class ProductService {

  /**
   *  URL to web api.
   */
  private endpointUrl = 'rest/products';

  constructor(private http: HttpClient) { }

  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(this.endpointUrl)    
    .pipe(
      tap(_ => console.log('fetched products')),
      catchError(this.handleError<Product[]>('getProducts', this.mockProducts()))
    );
  }

      
      
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error("Error when calling operation ", operation); 
      console.error(error); // log to console instead
      
      // Let the app keep running by returning a mocked result.
      return of(result as T);
    };
  }


  private mockProducts(): Product[]  {
    return [
      {
          id: 1,
          name: 'Mock: Phone XL',
          price: 799,
          description: 'A large phone with one of the best screens'
      },
      {
          id: 2,
          name: 'Mock: Phone Mini',
          price: 699,
          description: 'A great phone with one of the best cameras'
      },
      {
          id: 3,
          name: 'Mock: Phone Standard',
          price: 299,
          description: 'A stardard phone with no special feature'
      }
    ];
  }

}
