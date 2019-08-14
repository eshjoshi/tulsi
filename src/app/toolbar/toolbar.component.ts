import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public user : firebase.User;
  constructor(private authService: AuthService) { }
  ngOnInit() {
    this.authService.getLoggedInUser()
    .subscribe(user=>{
       console.log(user);
       this.user = user;
    })
  }
  loginClick(){
    
  }

  logout(){
    this.authService.logout();
  }

}
