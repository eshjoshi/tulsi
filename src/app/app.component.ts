import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'poc';
  public name ={name:"eshwar", age:"28"};
  public message= "";
  constructor(){

  }
  ngOnInit(){
    
  }
}
