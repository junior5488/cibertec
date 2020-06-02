import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import User from 'src/app/models/user.model';
import { UserService } from 'src/app/admin/services/user.service';

@Injectable()
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  private currentUser: Observable<User>;

  constructor(private userService: UserService) {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    this.currentUserSubject = new BehaviorSubject<User>(user);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.userService.getUserByEmail(email).pipe(
      map((users: User[]) => {
        if (users.length) {
          const [user] = users;

          localStorage.setItem('currentUser', JSON.stringify(user));

          this.currentUserSubject.next(user);

          if (user.password === password) {
            return { success: true };
          }
        }

        return { success: false };
      })
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    return of({ success: true });
  }
}
