import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  isLoading = false;
  userForm;

  @Input() model;
  @Output() onSaveForm = new EventEmitter();

  constructor(private location: Location) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl(this.model.name || '', [Validators.required]),

      lastName: new FormControl(this.model.lastName || '', [
        Validators.required,
      ]),

      email: new FormControl(this.model.email || '', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),

      role: new FormControl(this.model.role || '', [Validators.required]),

      password: new FormControl(this.model.password || '', [
        Validators.required,
        Validators.minLength(6),
      ]),

      phone: new FormControl(this.model.phone || '', [
        Validators.required,
        Validators.minLength(7),
        Validators.pattern('^(0|[1-9][0-9]*)$'),
      ]),
    });
  }

  onBack() {
    this.location.back();
  }

  onSubmit() {
    const { value, valid } = this.userForm;
    if (valid) {
      if (this.model.id) {
        value.id = this.model.id;
      }

      this.onSaveForm.emit(value);
    }
  }
}
