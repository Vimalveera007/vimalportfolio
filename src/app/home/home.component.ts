import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   toggle: boolean = true;

    OnToggle() {
    this.toggle = !this.toggle;
  }
  
  panelOpenState: boolean = false;

  user = [
    { name: 'Alice', active: true },
    { name: 'Bob', active: false },
    { name: 'Charlie', active: true },
    { name: 'Vimal', active: true },
    { name: 'Karthick,', active: false },
    { name: 'Kiran', active: true },
  ];

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
    } else {
      this.isAuth = false;
      this.errormessage = 'Invalid username or password';
    }
  }

   users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => (this.users = data));
    console.log(this.users);
  }
}
