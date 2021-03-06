import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient) { }

   endpoint = 'http://18.206.229.80:5000/api/v1/';
   httpOptions = {
   headers: new HttpHeaders({
     'Content-Type':  'application/json'
   })
 };

 private extractData(res: Response) {
  let body = res;
  return body || { };
}

getCategories(): Observable<any> {
  return this.http.get(this.endpoint + 'categories/').pipe(
    map(this.extractData));
}
  getListValues(id): Observable<any> {
    return this.http.get(this.endpoint + 'categories/' + id + '/acts' ).pipe(
      map(this.extractData));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
