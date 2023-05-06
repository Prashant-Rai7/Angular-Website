import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(){}

  ngOnInit() {
    this.myReactiveForm = new FormGroup({
      'username': new FormControl('null'),
      'email': new FormControl('null'),
      'course': new FormControl('null'),
      'gender': new FormControl('null')
    })
  }


  myReactiveForm: FormGroup | undefined;
  defaultCourse="select"
  submitted: boolean = false;
  formData = {
    fname: '',
    lname: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    course: ''
  }
  signupForm: any;
  signupSubmit(signupForm: NgForm){
    console.log(this.signupForm)
    this.submitted = true;
    // this.formData.fname = this.signupForm.value.userDetail.fname;
    this.signupForm.reset()
  }

}
