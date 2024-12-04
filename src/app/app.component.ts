import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, LoginComponent, HomeComponent],
})
export class AppComponent {
  constructor() {}
  isLogin: boolean = false;

  lodingCompleete(value: boolean) {
    this.isLogin = value;
  }
}
