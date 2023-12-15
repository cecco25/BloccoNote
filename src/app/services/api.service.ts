import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://www.seagullcode.it/ntapi';

  private authToken: String | null = null;
  private headers = new HttpHeaders();

  constructor(sessionToken: String, private http: HttpClient) {

  }

  setAuthToken(token: String | null): void {
    this.authToken = token;
  }

  login(email: string, password: string): Observable<any> {
    try {

      this.headers.append('email', email);
      this.headers.append('password', password);

      const res = this.http.post<any>('/auth', null, { headers: this.headers });
      return this.http.post<any>(`${this.apiUrl}/auth`, null, { headers: this.headers })
        .pipe(map((res: any) => {
          if (res && res.session) {
            this.setAuthToken(res.session);
          }
          return res;
        })
      );
    } catch (error) {
      console.error('Errore durante l\'autenticazione:', error);
      throw error;
    }
  }

}