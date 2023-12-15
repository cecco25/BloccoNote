import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { ApiService } from './services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [UserService, ApiService, HttpClient]
})
export class AppComponent {
  constructor() { }
}
