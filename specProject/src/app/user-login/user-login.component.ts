import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  signupUsers: any[] = [];
  signupObj:any = {
    username:'',
    email:'',
    password:'',
    userType:''
  };
  loginObj: any = {
    email:'',
    password:'',
  };


  constructor(){}

  ngOnInit(): void{}

  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers',JSON. stringify(this.signupUsers));
  }

  onLogin(){

  }
}
