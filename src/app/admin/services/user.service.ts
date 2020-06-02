import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from 'src/app/models/user.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  readonly BASE_URL = 'http://localhost:4000';
  readonly endpoint = 'users';
  constructor(private http: HttpClient) {}

  getAllUsers() {
    const url = `${this.BASE_URL}/${this.endpoint}`;

    return this.http.get(url);
  }

  getUserById(id: number) {
    const url = `${this.BASE_URL}/${this.endpoint}/${id}`;
    return this.http.get(url);
  }

  createUser(user: User) {
    const url = `${this.BASE_URL}/${this.endpoint}`;
    return this.http.post(url, user);
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.BASE_URL}/${this.endpoint}/${user.id}`;
    return this.http.put<User>(url, user);
  }

  deleteUser(id: number) {
    const url = `${this.BASE_URL}/${this.endpoint}/${id}`;
    return this.http.delete(url);
  }

  getUserByEmail(email: string): Observable<User[]> {
    const url = `${this.BASE_URL}/${this.endpoint}?email=${email}`;
    return this.http.get<User[]>(url);
  }
}
