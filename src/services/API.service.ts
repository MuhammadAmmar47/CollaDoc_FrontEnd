import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient) {}

  getToken(formBody: { name: string; password: string }) {
    return this.http.post(
      `${environment.apiBaseUrl}/AuthService/auth/login`,
      formBody
    );
  }
}
