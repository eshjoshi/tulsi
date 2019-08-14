import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user : firebase.User;
  constructor(private authService: AuthService) { }
  ngOnInit() {
    this.authService.getLoggedInUser()
    .subscribe(user=>{
       console.log(user);
       this.user = user;
    })
  }
  loginGoogle(){
    console.log('Login..');
    this.authService.login();
  }
 
}
