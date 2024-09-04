import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: Login;
  constructor(private http: HttpClient) {
    this.login = new Login('', '');
  }

  onLogin() {
    if (this.login.userName && this.login.password) {
      console.log('Email:', this.login.userName);
      console.log('Password:', this.login.password);
      // Perform login logic here, such as sending data to a server
      this.http.post('https://localhost:7267/api/login', this.login).subscribe((response) => {
        console.log('Response:', response);
      });
    }
  }

}

export class Login {
  userName: string;
  password: string;
  constructor(user: string, password: string) {
    this.userName = user;
    this.password = password;
  }
}