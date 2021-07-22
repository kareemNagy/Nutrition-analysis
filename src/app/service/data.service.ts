import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: string = "https://api.edamam.com/api/nutrition-data";
  url: string;
  app_key: string = "0a656c4ce26fa0e44e88bd55f109d995";
  app_id: string = "83c03dd4";

  results: any[] = [];

  constructor(private http: HttpClient, public router: Router) { }

  getRecipeData(userSearch: string): Observable<any> {
    this.url = `https://api.edamam.com/api/nutrition-data?app_id=83c03dd4&app_key=0a656c4ce26fa0e44e88bd55f109d995&nutrition-type=cooking&ingr=${userSearch}`;

    return this.http.get<any>(this.url)
      .pipe(
        catchError((err) => {
          console.log('Connection Error: 401');
          console.log('Error caught in service');
          console.error(err);
          this.router.navigateByUrl("/error-page");
          return throwError(err);    //Rethrow it back to component
        })
      )
  }



}
