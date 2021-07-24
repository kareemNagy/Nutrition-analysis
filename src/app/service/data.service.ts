import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public dataRes: any[];
  public baseUrl: string = "https://api.edamam.com/api";
  public app_key: string = "0a656c4ce26fa0e44e88bd55f109d995";
  public app_id: string = "83c03dd4";
  public url: string = this.baseUrl + '/nutrition-details?app_id=' + this.app_id + '&app_key=' + this.app_key;
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };




  constructor(private http: HttpClient, public router: Router) { }


  // get all data from API
  getAll(data): Observable<any> {
    return this.http.get(this.url + data);
  }
  // get data based on id
  get(id): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
  // get data by post method 
  getPost(data): Observable<any> {
    return this.http.post(this.url, data, this.httpOptions);
  }
  // update data 
  update(id, data): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data);
  }
  // delete data 
  delete(id): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
  // delete all data
  deleteAll(): Observable<any> {
    return this.http.delete(this.url);
  }
  // find by title inside data
  findByTitle(title): Observable<any> {
    return this.http.get(`${this.url}?title=${title}`);
  }



}
