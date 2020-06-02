import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import User from 'src/app/models/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  user: User;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      this.userService.getUserById(+id).subscribe((user: User) => {
        this.user = user;
      });
    });
  }

  onSaveUser(user) {
    console.log('User (que pasa??)->', user);
    this.userService.updateUser(user).subscribe(() => {
      this.router.navigate(['/admin/users']);
    });
  }
}
