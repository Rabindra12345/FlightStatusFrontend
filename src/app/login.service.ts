import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/api/login';

  private isAuthenticated: boolean = false;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<HttpResponse<any>> {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = {
      username,
      password
    };
    return this.http.post<any>(this.apiUrl, body, {
      headers,
      observe: 'response'
    });
  }

  logout(): void {
    // Set the isAuthenticated flag to false and clear any stored user credentials
    this.isAuthenticated = false;
    // clear any user tokens or credentials here if applicable
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
  
}
