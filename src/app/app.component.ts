import { MatInputModule } from '@angular/material/input';
import { Component } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { APIService } from '../services/API.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
})
export class AppComponent {
  loginForm: FormGroup;
  constructor(private _service: APIService, private _formBuilder: FormBuilder) {
    this.loginForm = this._formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  title = 'CollaDoc_FrontEnd';
  hide = true;

  ngOnIt() {}
  submit() {
    if (this.loginForm.valid) {
      this._service.getToken(this.loginForm.value).subscribe((data) => {
        const token = data;
      });
    }
  }
}
