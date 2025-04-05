import { Component } from '@angular/core';
import { MaterialImportsModule } from '../../../material-imports.module';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [MaterialImportsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  // username: string = '';
  // password: string = '';

  constructor(
    private _auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  submit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);

      const username = this.loginForm.value.username as string;
      const password = this.loginForm.value.password as string;

      this._auth.login(username, password).subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
          this.toastr.success('Login Successfully', 'Login');
        },
        error: (err) => {
          this.toastr.error('err', 'Login failed');
        },
      });
    }
  }
}
