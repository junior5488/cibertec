import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { UsersComponent } from './users/users.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './services/user.service';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataUserPipe } from './pipes/datauser.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    UserNewComponent,
    UserEditComponent,
    UserFormComponent,
    AdminComponent,
    DataUserPipe,
  ],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule],
  exports: [HeaderComponent, FooterComponent, UsersComponent],
  providers: [UserService],
})
export class AdminModule {}
