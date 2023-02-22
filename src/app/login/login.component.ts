import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.loginService.login(this.username, this.password).subscribe(
        (response) => {
          if (response.status === 200) {
            localStorage.setItem('isLoggedIn', 'true');
            this.router.navigate(['/flight-status']);
          } else {
            this.errorMessage = 'Invalid login credentials';
          }
        },
        (error) => {
          this.errorMessage = 'Error logging in';
        }
      );
    }
  }
}
