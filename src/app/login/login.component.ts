import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router){}
  username: string = '';
  password: string = '';
  isAuth: boolean = false;
  errormessage: string = '';

  isvaliduserame = 'admin';
  isvalidpassword = 'admin123';

  onLogin() {
    if (
      this.username === this.isvaliduserame &&
      this.password === this.isvalidpassword
    ) {
      this.isAuth = true;
      this.errormessage = '';
      this.router.navigate(["/home"])
    } else {
      this.isAuth = false;
      this.errormessage = 'Invalid username or password';
    }
  }

}
