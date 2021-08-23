import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getRegister()
   {
alert("Congratulations .Your account successfully created ")
  }
  getSignin()
  {
alert("Wait for some time.Server Busy. sorry ")
 }

}
