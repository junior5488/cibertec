import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignInComponent, LoginComponent],
  imports: [CommonModule, LoginRoutingModule, FormsModule],
  providers: [],
})
export class LoginModule {}
