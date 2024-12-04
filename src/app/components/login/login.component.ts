import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { APIService } from '../../../services/API.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
})
export class LoginComponent {
  loginForm: FormGroup;
  @Output() loadingCompleted = new EventEmitter<boolean>();
  constructor(private _service: APIService, private _formBuilder: FormBuilder) {
    this.loginForm = this._formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  hide = true;
  submit() {
    if (this.loginForm.valid) {
      this._service.getToken(this.loginForm.value).subscribe((data) => {
        const token = data;
        this.loadingCompleted.emit(true);
      });
    }
  }
}
