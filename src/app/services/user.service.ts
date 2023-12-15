import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService) { }

  loginUser(email: string, password: string): void {
    this.api.login(email, password).subscribe(
      (response) => {
        console.log('Risposta dalla chiamata API:', response);
      }, (error) => {
        console.error('Errore durante il login:', error);
      }
    );
  }
}
