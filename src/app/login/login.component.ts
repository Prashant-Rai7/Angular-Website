import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Welcome to Login Page';
  addForm: NgForm;

  constructor(private router: Router) {
    this.addForm = new NgForm([], []);
  }

  emailValues = "";
  passValues = "";

  onEmailPress(event: any) {
    this.emailValues = event.target.value;
  }

  onPassPress(event: any) {
    this.passValues = event.target.value;
  }

  resetForm(){

    if(this.emailValues === "prashantrai@gmail.com" && this.passValues === "admin_12345678"){
      console.log("Logged in")
      this.addForm.reset({
      });
      this.router.navigate(['home'])
  }
  }
}
