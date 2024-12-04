import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../models/auth.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports:[
              RouterModule,
              CommonModule,
              FormsModule,
              MatCardModule,
              MatFormFieldModule,
              MatInputModule,
              MatButtonModule,

              ReactiveFormsModule
  ]
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    if (this.authService.logIn(this.username, this.password)) {
      this.router.navigate(['/list']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
