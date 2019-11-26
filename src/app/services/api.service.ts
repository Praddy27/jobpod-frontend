import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  baseUri: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }
  // Create User
  registerUser(data): Observable<any> {
    let url = `${this.baseUri}/user/register`;
    return this.http.post(url, data)
  }

  // update user
  updateUser(data): Observable<any> {
    let url = `${this.baseUri}/user/update`;
    return this.http.post(url, data)
  }
  // details user
  getUserDetails(data): Observable<any> {
    let url = `${this.baseUri}/user/details`;
    return this.http.get(url, {
      params: {
        'email_id': data
      }
    })
  }

  //details company
  getCompanyDetails(data): Observable<any> {
    let url = `${this.baseUri}/company/details`;
    return this.http.get(url, {
      params: {
        'email_id': data
      }
    })
  }
  updateCompany(data): Observable<any> {
    let url = `${this.baseUri}/company/update`;
    return this.http.post(url, data)
  }
  //Create Company
  registerCompany(data): Observable<any> {
    let url = `${this.baseUri}/company/register`;
    return this.http.post(url, data)
  }


  // login user
  loginUser(data): Observable<any> {
    let url = `${this.baseUri}/user/login`;
    return this.http.post(url, data)

  }

  loginCompany(data): Observable<any> {
    let url = `${this.baseUri}/company/login`;
    return this.http.post(url, data)

  }

  //PODS

  // Create
  createPod(data): Observable<any> {
    let url = `${this.baseUri}/pod/create`;
    return this.http.post(url, data);
  }

  // search pods

  searchCompanyPod(data): Observable<any> {
    let url = `${this.baseUri}/company/get-pod`;
    return this.http.get(url, {
      params: {
        'email_id': data
      }
    });
  }

  searchCompanyDashboardPod(data): Observable<any> {
    let url = `${this.baseUri}/company/get-dashboard`;
    return this.http.get(url, {
      params: {
        'email_id': data
      }
    });
  }

  //search users
  searchUsers(data): Observable<any> {
    let url = `${this.baseUri}/company/get-user`;
    return this.http.post(url, data);
  }

  addNewUsers(data): Observable<any> {
    let url = `${this.baseUri}/pod/addUser`;
    return this.http.post(url, data);
  }

  viewUsersInPod(data): Observable<any> {
    let url = `${this.baseUri}/company/get-added-user`;
    return this.http.post(url, data);
  }


  //getmypod
  getMyPod(data): Observable<any> {
    let url = `${this.baseUri}/user/get-pod`;
    return this.http.get(url, {
      params: {
        'email_id': data
      }
    });
  }

  acceptCompanyOffer(data): Observable<any> {
    let url = `${this.baseUri}/user/add-pod`;
    return this.http.post(url, data);
  }

}