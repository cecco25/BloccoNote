import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email = "";
  password = "";
  apiUrl = 'http://www.seagullcode.it/ntapi';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  login() {
    this.headers.append('email', this.email);
    this.headers.append('password', this.password);
    console.log(this.email + " " + this.password)
    this.http.post<any>(`${this.apiUrl}/auth`, null, { headers: this.headers })
      .pipe(map((res: any) => {
        if (res && res.session) {
          console.log(res.session);
        }
        return res;
      })
      );
  }

}
