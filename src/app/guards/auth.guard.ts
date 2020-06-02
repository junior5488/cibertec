import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate() {
    const currentUser = this.authService.currentUserValue;

    if (currentUser) {
      return true;
    }

    this.router.navigate(['/login']);

    return false;
  }
}
