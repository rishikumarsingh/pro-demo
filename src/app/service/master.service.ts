import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  URL = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


  Login(data: any) {
    return this.http.post<any>(this.URL + '/login', data);
  }


  insertCustomervillage(data: any) {
    return this.http.post<any>(this.URL + '/insert-village', data);
  }

  getCustomervillage(): Observable<any> {
    return this.http.get(this.URL + '/cities');
  }
  updateCustomervillage(data: any, id: any) {
    return this.http.post<any>(this.URL + '/update-city/' + id, data);

  }
  deleteCustomervillage(id: any) {
    return this.http.delete<any>(this.URL + '/delete-city/' + id);
  }


}
