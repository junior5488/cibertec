import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  model = {
    email: '',
    password: '',
  };
  error = '';

  ngOnInit() {}

  onSubmit() {
    this.authService
      .login(this.model.email, this.model.password)
      .subscribe((response) => {
        if (response.success) {
          this.router.navigate(['/admin']);
        } else {
          this.error = 'Usuario y/o contraseña son inválidas';
        }
      });
  }
}
