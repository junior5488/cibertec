import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  titles: string[] = [
    '#',
    'Nombres',
    'Apellidos',
    'Correo Electrónico',
    'Rol',
    'Teléfono',
  ];
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data: User[]) => {
      return (this.users = data);
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter((user) => {
        return user.id != id;
      });
    });
  }
}
